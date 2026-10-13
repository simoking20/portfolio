<template>
  <div class="app-root">
    <!-- Fixed Navigation -->
    <Navbar 
      :whatsapp-url="portfolioData.identity.socials.whatsapp" 
      :cv-data="portfolioData.cv"
      @download-cv="handleDownloadCv"
    />

    <!-- Main Content -->
    <main>
      <HeroSection 
        :identity="portfolioData.identity" 
        :cv-data="portfolioData.cv"
        @download-cv="handleDownloadCv"
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

    <!-- Toast Notification: CV Download Status -->
    <transition name="toast">
      <div 
        v-if="toastVisible" 
        class="toast-notification" 
        role="status" 
        aria-live="polite"
      >
        <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="12" y1="18" x2="12" y2="12"></line>
          <polyline points="9 15 12 18 15 15"></polyline>
        </svg>
        <div class="toast-body">
          <p class="toast-title">{{ toastTitle }}</p>
          <p class="toast-desc">{{ toastDesc }}</p>
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
const toastTitle = ref('CV Download Started')
const toastDesc = ref('Your Word CV (.docx) is downloading.')
let toastTimer = null

const handleDownloadCv = (event) => {
  const cvData = portfolioData.cv || {}
  const fileName = cvData.fileName || 'Hacini_Mohammed_Oussama_CV.docx'

  toastTitle.value = 'CV Download Started'
  toastDesc.value = `${fileName} (${cvData.fileSize || '11 KB'}) is ready.`
  toastVisible.value = true
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastVisible.value = false
  }, 3500)

  // Direct binary download from local database (base64)
  if (cvData.base64 && typeof window !== 'undefined') {
    try {
      if (event && event.preventDefault) event.preventDefault()
      const binaryString = atob(cvData.base64)
      const bytes = new Uint8Array(binaryString.length)
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i)
      }
      const blob = new Blob([bytes], {
        type: cvData.mimeType || 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      })
      const blobUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000)
    } catch (err) {
      console.warn('Fallback to native link download:', err)
    }
  }
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
