<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-branding">
        <a href="#" class="footer-logo mono" @click.prevent="scrollToTop">
          <span class="bracket">&lt;</span>
          <span class="text">oussama</span>
          <span class="bracket">/&gt;</span>
        </a>
        <p class="footer-engineer">
          {{ identity.name }}
        </p>
        <p class="footer-location mono">
          📍 {{ identity.location }}
        </p>
      </div>

      <div class="footer-nav">
        <span class="nav-title mono">// Direct Links</span>
        <a :href="identity.socials.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="identity.socials.github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a :href="identity.socials.whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>

      <div class="footer-actions">
        <button class="btn-top mono" @click="scrollToTop" title="Back to Top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
          <span>Top</span>
        </button>
        <div class="footer-copy mono">
          &copy; {{ currentYear }} • Built with Vue 3 &amp; Clean CSS
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  identity: {
    type: Object,
    required: true
  }
})

const currentYear = 2026

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.footer {
  background: #0A0D12;
  border-top: 1px solid var(--border-subtle);
  padding: 50px 0 35px;
  position: relative;
  z-index: 1;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
}

.footer-branding {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer-logo {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-main);
  text-decoration: none;
}

.bracket {
  color: var(--accent-light);
}

.text {
  color: var(--text-main);
}

.footer-engineer {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-sub);
}

.footer-location {
  font-size: 0.84rem;
  color: var(--text-muted);
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-title {
  font-size: 0.78rem;
  color: var(--accent-light);
  margin-bottom: 2px;
}

.footer-nav a {
  font-size: 0.9rem;
  color: var(--text-muted);
  transition: color var(--transition-fast);
}

.footer-nav a:hover {
  color: var(--text-main);
}

.footer-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

.btn-top {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--surface-1);
  border: 1px solid var(--border-card);
  color: var(--text-sub);
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-size: 0.82rem;
  transition: all var(--transition-fast);
}

.btn-top svg {
  width: 15px;
  height: 15px;
}

.btn-top:hover {
  border-color: var(--accent-primary);
  color: var(--text-main);
  transform: translateY(-2px);
}

.footer-copy {
  font-size: 0.8rem;
  color: var(--text-muted);
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-actions {
    align-items: flex-start;
  }
}
</style>
