/**
 * GrowStack Technical Blog — Client-side Interactivity
 * Theme Toggle, Mobile Navigation, Code Copy Buttons
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initCodeCopyButtons();
});

/* Theme Toggle (Dark / Light mode) */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  setTheme(currentTheme);

  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    toggleBtn.innerHTML = theme === 'dark' 
      ? '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'
      : '<svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>';
  }
}

/* Mobile Menu Toggle */
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
  });
}

/* Copy Code Button for Code Blocks */
function initCodeCopyButtons() {
  const codeBlocks = document.querySelectorAll('.article-body pre');
  
  codeBlocks.forEach(block => {
    // Create copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-code-btn';
    copyBtn.innerText = 'Copy';
    copyBtn.setAttribute('aria-label', 'Copy code snippet');

    copyBtn.addEventListener('click', async () => {
      const codeText = block.querySelector('code') ? block.querySelector('code').innerText : block.innerText;
      try {
        await navigator.clipboard.writeText(codeText);
        copyBtn.innerText = 'Copied!';
        copyBtn.style.color = '#34d399';
        setTimeout(() => {
          copyBtn.innerText = 'Copy';
          copyBtn.style.color = '';
        }, 2000);
      } catch (err) {
        copyBtn.innerText = 'Failed';
      }
    });

    block.appendChild(copyBtn);
  });
}
