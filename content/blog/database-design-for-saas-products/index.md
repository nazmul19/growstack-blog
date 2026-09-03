---
title: "How to Approach Database Design for SaaS Products"
date: 2026-08-10T10:00:00Z
draft: false
featured: false
description: "Key principles for multi-tenant database modeling, foreign key constraints, migration strategies, and indexing for high-performance SaaS platforms."
categories: ["Databases", "SaaS"]
tags: ["PostgreSQL", "Database Design", "Multi-Tenancy", "Data Modeling", "SQL"]
author: "GrowStack Engineering"
ctaTitle: "Designing or scaling your SaaS database architecture?"
ctaText: "GrowStack specializes in PostgreSQL schema design, multi-tenant isolation, and query optimization for SaaS backends."
ctaButton: "Work with GrowStack"
---

The relational database is the foundation of almost every multi-tenant SaaS application. While application code can be refactored relatively easily, changing core database schemas and relationships on a live production database with millions of user records is complex and risky.

Getting database design right early saves hundreds of engineering hours later. This guide covers essential principles for structuring data in multi-tenant SaaS products.

---

## 1. Multi-Tenancy Patterns: Choosing the Right Isolation Model

Every B2B SaaS application serves multiple customers (tenants). There are three primary database architectures for handling multi-tenancy:

```text
[ Multi-Tenancy Models ]

1. Discriminator Column (Shared DB, Shared Schema)
   Table: orders (id, tenant_id, amount, created_at)

2. Schema Isolation (Shared DB, Separate Schemas)
   PostgreSQL Schemas: tenant_acme.orders, tenant_globex.orders

3. Database Isolation (Separate DB Per Tenant)
   Databases: db_acme_prod, db_globex_prod
```

### 1. Discriminator Column (`tenant_id`) — Recommended for Most SaaS
All tenants share the same tables. Every row includes a `tenant_id` foreign key.

- **Pros**: Extremely low operational cost, easy schema migrations, simple connection pooling.
- **Cons**: Requires strict query filtering (`WHERE tenant_id = ?`) on every query to prevent data leaks.

### 2. Schema Isolation (PostgreSQL Schemas)
Each tenant gets their own schema namespace inside the same PostgreSQL instance.

- **Pros**: Stronger logical separation, easier tenant data export.
- **Cons**: Running migration scripts across 1,000 schemas becomes slow and error-prone.

### 3. Dedicated Database Per Tenant
Used primarily for Enterprise tier clients with strict compliance/residency requirements (HIPAA, SOC2, GDPR).

---

## 2. Enforce Referential Integrity at the Database Level

Never rely exclusively on application code to enforce data integrity. If an application server crashes mid-request, missing foreign key constraints or null checks will corrupt your state.

```sql
-- Production-Ready Table Definition
CREATE TABLE organization_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role VARCHAR(50) NOT NULL DEFAULT 'MEMBER',
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  -- Database constraint enforcing unique user per organization
  CONSTRAINT uq_org_user UNIQUE (organization_id, user_id)
);
```

---

## 3. Strategic Indexing Strategies

Indexes speed up `SELECT` queries but slow down `INSERT`/`UPDATE` operations because the index trees must be recalculated.

### Key Indexing Guidelines for SaaS
1. **Always Index Foreign Keys**: PostgreSQL does not automatically index foreign key columns. Index `tenant_id`, `user_id`, `organization_id`.
2. **Composite Indexes for Filter Combinations**: If your queries filter by `tenant_id` AND `status`, create a composite index:
   ```sql
   CREATE INDEX idx_orders_tenant_status ON orders(tenant_id, status);
   ```
3. **Partial Indexes for Soft Deletes / Status Filters**: If 95% of your records are inactive, index only active records:
   ```sql
   CREATE INDEX idx_active_users ON users(tenant_id) WHERE deleted_at IS NULL;
   ```

---

## 4. Zero-Downtime Migration Workflows

Never execute breaking schema modifications in a single migration step (e.g. renaming a column or dropping a field).

### Safe 4-Step Column Rename Strategy
1. **Step 1 (Add New Column)**: Run migration to create `new_column_name` alongside `old_column_name`.
2. **Step 2 (Dual-Write in App)**: Deploy application update that writes to BOTH columns, but reads from `old_column_name`.
3. **Step 3 (Backfill & Switch Read)**: Run a background job to copy historical data from old to new column. Deploy update to read from `new_column_name`.
4. **Step 4 (Drop Old Column)**: Verify no code references the old column, then execute migration to drop `old_column_name`.

---

## Summary Checklist

- [x] Multi-tenancy model selected and documented
- [x] Foreign key constraints and UNIQUE rules enforced in SQL
- [x] Composite indexes created for high-cardinality query paths
- [x] Zero-downtime migration strategy established
- [x] `TIMESTAMPTZ` (UTC) used for all date fields
