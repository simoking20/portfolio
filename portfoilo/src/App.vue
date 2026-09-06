<template>
  <div class="app-root">
    <!-- Fixed Navigation -->
    <Navbar :whatsapp-url="portfolioData.identity.socials.whatsapp" />

    <!-- Main Content -->
    <main>
      <HeroSection :identity="portfolioData.identity" />
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
