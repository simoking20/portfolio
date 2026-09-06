<template>
  <header :class="['navbar', { 'navbar-scrolled': isScrolled }]">
    <div class="container nav-inner">
      <!-- Logo -->
      <a href="#" class="nav-logo" @click.prevent="scrollToTop">
        <span class="logo-bracket">&lt;</span>
        <span class="logo-text">oussama</span>
        <span class="logo-bracket">/&gt;</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="nav-links desktop-only">
        <a 
          v-for="item in navItems" 
          :key="item.href" 
          :href="item.href"
          :class="['nav-link', { active: activeSection === item.id }]"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Action CTA -->
      <div class="nav-actions desktop-only">
        <a 
          :href="whatsappUrl" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn-whatsapp btn-sm"
        >
          <svg class="icon-sm" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
          </svg>
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button 
        class="mobile-toggle" 
        :class="{ open: mobileMenuOpen }" 
        @click="toggleMobileMenu" 
        aria-label="Toggle navigation menu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    </div>

    <!-- Mobile Drawer -->
    <div :class="['mobile-drawer', { open: mobileMenuOpen }]">
      <nav class="mobile-nav-links">
        <a 
          v-for="item in navItems" 
          :key="item.href" 
          :href="item.href"
          :class="['mobile-nav-link', { active: activeSection === item.id }]"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </a>
        <a 
          :href="whatsappUrl" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn-whatsapp" 
          @click="closeMobileMenu"
        >
          <span>Contact via WhatsApp</span>
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  whatsappUrl: {
    type: String,
    required: true
  }
})

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('hero')

const navItems = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20

  const sections = ['about', 'projects', 'skills', 'experience', 'contact']
  const scrollPosition = window.scrollY + 150

  for (const sectionId of sections) {
    const el = document.getElementById(sectionId)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = sectionId
        return
      }
    }
  }
  if (window.scrollY < 200) {
    activeSection.value = 'hero'
  }
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
  closeMobileMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  z-index: 100;
  transition: all var(--transition-normal);
  background: rgba(13, 17, 23, 0.65);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
}

.navbar-scrolled {
  background: rgba(13, 17, 23, 0.92);
  border-bottom-color: var(--border-subtle);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav-logo {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--text-main);
  display: inline-flex;
  align-items: center;
  transition: transform var(--transition-fast);
}

.nav-logo:hover {
  transform: translateY(-1px);
}

.logo-bracket {
  color: var(--accent-light);
  font-weight: 600;
}

.logo-text {
  color: var(--text-main);
  padding: 0 1px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: all var(--transition-fast);
  position: relative;
  padding: 6px 0;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-main);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--accent-primary);
  border-radius: 2px;
  box-shadow: 0 0 8px var(--accent-primary);
}

.nav-actions {
  display: flex;
  align-items: center;
}

.icon-sm {
  width: 16px;
  height: 16px;
}

/* Mobile Toggle */
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  flex-direction: column;
  gap: 5px;
  z-index: 101;
}

.mobile-toggle .bar {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--text-main);
  border-radius: 2px;
  transition: all var(--transition-fast);
}

.mobile-toggle.open .bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.mobile-toggle.open .bar:nth-child(2) {
  opacity: 0;
}

.mobile-toggle.open .bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Drawer */
.mobile-drawer {
  display: none;
  position: absolute;
  top: var(--nav-height);
  left: 0;
  width: 100%;
  background: rgba(16, 22, 31, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-subtle);
  padding: 24px 20px 30px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.6);
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: all var(--transition-normal);
}

.mobile-drawer.open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile-nav-link {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-sub);
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.mobile-nav-link.active {
  color: var(--accent-light);
}

@media (max-width: 820px) {
  .desktop-only {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .mobile-drawer {
    display: block;
  }
}
</style>
