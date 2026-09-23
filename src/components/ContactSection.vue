<template>
  <section class="section contact-section" id="contact">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">
          <span>// Get In Touch</span>
        </div>
        <h2 class="section-title">Let's Connect &amp; Collaborate</h2>
        <p class="section-desc">
          Whether you have a backend engineering opening, want to discuss database architecture, or want to collaborate on a product.
        </p>
      </div>

      <div class="contact-card-container">
        <!-- Main WhatsApp Highlight Card -->
        <div class="contact-main-card">
          <div class="main-card-glow"></div>
          <div class="main-card-inner">
            <div class="whatsapp-badge mono">DIRECT INSTANT CHAT</div>
            <h3 class="main-card-title">Message Me on WhatsApp</h3>
            <p class="main-card-desc">
              For quick inquiries, freelance collaborations, or engineering role discussions, WhatsApp is the fastest channel to reach me directly.
            </p>

            <div class="main-card-actions">
              <a 
                :href="identity.socials.whatsapp" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-whatsapp"
              >
                <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                <span>Open WhatsApp Chat</span>
              </a>

              <button @click="copyWhatsApp" class="btn btn-secondary mono">
                <span>{{ copied ? 'Copied to Clipboard!' : 'Copy Link' }}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Social Channels Grid -->
        <div class="channels-grid">
          <!-- LinkedIn -->
          <a 
            :href="identity.socials.linkedin" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="channel-box"
          >
            <div class="channel-icon-wrapper linkedin">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </div>
            <div class="channel-content">
              <div class="channel-title">LinkedIn Profile</div>
              <div class="channel-subtitle mono">mohammed-oussama-hacini</div>
            </div>
            <div class="channel-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"></path>
              </svg>
            </div>
          </a>

          <!-- GitHub -->
          <a 
            :href="identity.socials.github" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="channel-box"
          >
            <div class="channel-icon-wrapper github">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </div>
            <div class="channel-content">
              <div class="channel-title">GitHub Profile</div>
              <div class="channel-subtitle mono">@simoking20</div>
            </div>
            <div class="channel-arrow">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"></path>
              </svg>
            </div>
          </a>

          <!-- Location Info Box -->
          <div class="channel-box location-box">
            <div class="channel-icon-wrapper location">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="channel-content">
              <div class="channel-title">Location &amp; Timezone</div>
              <div class="channel-subtitle mono">{{ identity.location }} (UTC+1)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  identity: {
    type: Object,
    required: true
  }
})

const copied = ref(false)

const copyWhatsApp = async () => {
  try {
    await navigator.clipboard.writeText(props.identity.socials.whatsapp)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2400)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}
</script>

<style scoped>
.contact-card-container {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 30px;
}

.contact-main-card {
  background: var(--surface-1);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  padding: 38px 34px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-card-glow {
  position: absolute;
  top: -80px;
  right: -80px;
  width: 260px;
  height: 260px;
  background: radial-gradient(circle, rgba(37, 211, 102, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.whatsapp-badge {
  display: inline-block;
  font-size: 0.74rem;
  color: #25D366;
  background: rgba(37, 211, 102, 0.1);
  border: 1px solid rgba(37, 211, 102, 0.25);
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  margin-bottom: 16px;
  letter-spacing: 0.05em;
}

.main-card-title {
  font-size: 1.8rem;
  color: var(--text-main);
  margin-bottom: 14px;
}

.main-card-desc {
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--text-sub);
  margin-bottom: 28px;
}

.main-card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.channels-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.channel-box {
  background: var(--surface-1);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 18px;
  transition: all var(--transition-normal);
  text-decoration: none;
}

.channel-box:hover {
  transform: translateX(4px);
  border-color: rgba(59, 130, 246, 0.4);
  background: var(--surface-2);
}

.location-box:hover {
  transform: none;
  border-color: var(--border-card);
}

.channel-icon-wrapper {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.channel-icon-wrapper svg {
  width: 22px;
  height: 22px;
}

.channel-icon-wrapper.linkedin {
  background: rgba(10, 102, 194, 0.15);
  color: #0A66C2;
}

.channel-icon-wrapper.github {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-main);
}

.channel-icon-wrapper.location {
  background: var(--accent-glow);
  color: var(--accent-light);
}

.channel-content {
  flex-grow: 1;
}

.channel-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 2px;
}

.channel-subtitle {
  font-size: 0.84rem;
  color: var(--text-muted);
}

.channel-arrow {
  color: var(--text-muted);
  transition: transform var(--transition-fast), color var(--transition-fast);
}

.channel-arrow svg {
  width: 18px;
  height: 18px;
}

.channel-box:hover .channel-arrow {
  color: var(--accent-light);
  transform: translate(2px, -2px);
}

@media (max-width: 900px) {
  .contact-card-container {
    grid-template-columns: 1fr;
  }
}
</style>
