<template>
  <div class="app-root">
    <!-- Fixed Navigation -->
    <Navbar 
      :whatsapp-url="portfolioData.identity.socials.whatsapp" 
      @download-cv="showComingSoon"
    />

    <!-- Main Content -->
    <main>
      <HeroSection 
        :identity="portfolioData.identity" 
        @download-cv="showComingSoon"
      />
      <AboutSection :about="portfolioData.about" />
      <ProjectsSection :projects="portfolioData.projects" />
      <SkillsSection :skill-categories="portfolioData.skillCategories" />
      <ExperienceTimeline :timeline="portfolioData.timeline" />
      <ContactSection :identity="portfolioData.identity" />
    </main>

    <!-- Footer -->
    <Footer :identity="portfolioData.identity" />

    <!-- Floating Scroll-To-Top Button -->
    <transition name="fade">
      <button 
        v-if="showFloatingTop" 
        class="floating-top-btn" 
        @click="scrollToTop" 
        aria-label="Scroll to top"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </transition>

    <!-- Toast Notification: Coming Soon -->
    <transition name="toast">
      <div 
        v-if="toastVisible" 
        class="toast-notification" 
        role="status" 
        aria-live="polite"
      >
        <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <div class="toast-body">
          <p class="toast-title">This option is coming soon</p>
          <p class="toast-desc">The downloadable Word CV is currently being prepared.</p>
        </div>
        <button 
          class="toast-close" 
          @click="toastVisible = false" 
          aria-label="Close notification"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { portfolioData } from './data/portfolio'

import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import ContactSection from './components/ContactSection.vue'
import Footer from './components/Footer.vue'

const showFloatingTop = ref(false)
const toastVisible = ref(false)
let toastTimer = null

const showComingSoon = () => {
  toastVisible.value = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastVisible.value = false
  }, 3500)
}

const handleScroll = () => {
  showFloatingTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (toastTimer) clearTimeout(toastTimer)
})
</script>

<style scoped>
.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

main {
  flex: 1 0 auto;
}

.floating-top-btn {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-full);
  background: var(--surface-1);
  border: 1px solid var(--border-card);
  color: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 90;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  transition: all var(--transition-normal);
}

.floating-top-btn svg {
  width: 20px;
  height: 20px;
}

.floating-top-btn:hover {
  background: var(--accent-primary);
  color: #FFFFFF;
  border-color: var(--accent-primary);
  transform: translateY(-3px);
  box-shadow: 0 12px 28px rgba(59, 130, 246, 0.4);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.85);
}

@media (max-width: 600px) {
  .floating-top-btn {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
}
</style>
