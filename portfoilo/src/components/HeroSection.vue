<template>
  <section class="hero-section" id="hero">
    <!-- Ambient Radial Glows -->
    <div class="ambient-glow glow-blue"></div>
    <div class="ambient-glow glow-emerald"></div>

    <div class="container hero-container">
      <div class="hero-content">
        <!-- Status Pill -->
        <div class="status-pill">
          <span class="status-dot"></span>
          <span class="status-text">{{ identity.availability }}</span>
        </div>

        <!-- Headline & Title -->
        <h1 class="hero-name">
          {{ identity.name }}
        </h1>
        <div class="hero-title-wrapper">
          <span class="hero-title">{{ identity.title }}</span>
          <span class="location-badge">
            <svg class="icon-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            {{ identity.location }}
          </span>
        </div>

        <p class="hero-tagline">
          {{ identity.tagline }} Master's degree candidate in Computer Science at Kasdi Merbah University Ouargla, focused on building production-grade distributed services with Python, Django, FastAPI, and PostgreSQL.
        </p>

        <!-- CTA Buttons -->
        <div class="hero-actions">
          <a :href="identity.socials.linkedin" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <a :href="identity.socials.github" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
            <span>GitHub</span>
          </a>

          <a :href="identity.socials.whatsapp" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>

        <!-- Quick Section Anchors -->
        <div class="hero-quick-links">
          <a href="#projects" class="quick-link">
            <span>Explore Projects</span>
            <svg class="icon-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <span class="dot-divider">•</span>
          <a href="#experience" class="quick-link">
            <span>Career Timeline</span>
          </a>
          <span class="dot-divider">•</span>
          <a href="#skills" class="quick-link">
            <span>Tech Stack</span>
          </a>
        </div>
      </div>

      <!-- Backend Interactive Terminal Card -->
      <div class="hero-terminal-wrapper">
        <div class="terminal-card">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <div class="terminal-title mono">backend@oussama-node: ~</div>
            <div class="terminal-badge mono">STATUS: 200 OK</div>
          </div>
          <div class="terminal-body mono">
            <div class="code-line">
              <span class="token-comment"># Production backend service configuration</span>
            </div>
            <div class="code-line">
              <span class="token-keyword">from</span> backend.core <span class="token-keyword">import</span> FastAPI, GraphQLRouter
            </div>
            <div class="code-line">
              <span class="token-keyword">from</span> databases <span class="token-keyword">import</span> PostgreSQLCluster
            </div>
            <div class="code-line empty">&nbsp;</div>
            <div class="code-line">
              <span class="token-def">app</span> = FastAPI(title=<span class="token-string">"PADAR &amp; Enterprise Services"</span>)
            </div>
            <div class="code-line">
              <span class="token-def">db</span> = PostgreSQLCluster.pool(min_conn=<span class="token-number">10</span>, max_conn=<span class="token-number">100</span>)
            </div>
            <div class="code-line empty">&nbsp;</div>
            <div class="code-line">
              <span class="token-decorator">@app.get</span>(<span class="token-string">"/api/v1/health"</span>)
            </div>
            <div class="code-line">
              <span class="token-keyword">async def</span> <span class="token-function">health_check</span>():
            </div>
            <div class="code-line indent">
              <span class="token-keyword">return</span> {
            </div>
            <div class="code-line indent-2">
              <span class="token-key">"engineer"</span>: <span class="token-string">"Hacini Mohammed Oussama"</span>,
            </div>
            <div class="code-line indent-2">
              <span class="token-key">"role"</span>: <span class="token-string">"Backend Software Engineer"</span>,
            </div>
            <div class="code-line indent-2">
              <span class="token-key">"location"</span>: <span class="token-string">"Ouargla, DZ"</span>,
            </div>
            <div class="code-line indent-2">
              <span class="token-key">"active_services"</span>: [<span class="token-string">"PADAR"</span>, <span class="token-string">"LKVC"</span>, <span class="token-string">"Rafikni"</span>],
            </div>
            <div class="code-line indent-2">
              <span class="token-key">"latency_ms"</span>: <span class="token-number">1.42</span>,
            </div>
            <div class="code-line indent-2">
              <span class="token-key">"db_status"</span>: <span class="token-string text-green">"CONNECTED"</span>
            </div>
            <div class="code-line indent">
              }
            </div>
            <div class="terminal-footer-line">
              <span class="prompt-sign">$</span> <span class="terminal-cursor"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  identity: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: calc(var(--nav-height) + 40px);
  padding-bottom: 70px;
  position: relative;
  overflow: hidden;
}

/* Ambient Glow Effects */
.ambient-glow {
  position: absolute;
  width: 550px;
  height: 550px;
  border-radius: 50%;
  filter: blur(120px);
  pointer-events: none;
  z-index: 0;
  opacity: 0.18;
}

.glow-blue {
  top: 10%;
  right: -100px;
  background: radial-gradient(circle, var(--accent-primary) 0%, transparent 70%);
}

.glow-emerald {
  bottom: 5%;
  left: -150px;
  background: radial-gradient(circle, var(--green-learning) 0%, transparent 70%);
  opacity: 0.08;
}

.hero-container {
  display: grid;
  grid-template-columns: 1.15fr 0.95fr;
  gap: 50px;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Status Pill */
.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(22, 27, 34, 0.85);
  border: 1px solid var(--border-card);
  padding: 8px 16px;
  border-radius: var(--radius-full);
  margin-bottom: 24px;
  backdrop-filter: blur(10px);
}

.status-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: var(--green-learning);
  box-shadow: 0 0 10px var(--green-learning);
  animation: pulseGlow 2s infinite ease-in-out;
}

.status-text {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--text-sub);
  letter-spacing: 0.02em;
}

/* Headline */
.hero-name {
  font-size: clamp(2.4rem, 5.2vw, 3.8rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-main);
  line-height: 1.1;
  margin-bottom: 12px;
}

.hero-title-wrapper {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 22px;
}

.hero-title {
  font-size: clamp(1.25rem, 2.5vw, 1.7rem);
  font-weight: 600;
  color: var(--accent-light);
}

.location-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  color: var(--text-muted);
  background: var(--surface-1);
  padding: 4px 12px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
}

.icon-pin {
  width: 14px;
  height: 14px;
  color: var(--accent-primary);
}

.hero-tagline {
  font-size: 1.15rem;
  line-height: 1.65;
  color: var(--text-sub);
  max-width: 600px;
  margin-bottom: 34px;
}

/* Actions */
.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-bottom: 30px;
}

.btn-icon {
  width: 18px;
  height: 18px;
}

.hero-quick-links {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.quick-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-sub);
  transition: color var(--transition-fast);
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.quick-link:hover {
  color: var(--accent-light);
}

.icon-arrow {
  width: 14px;
  height: 14px;
}

.dot-divider {
  color: var(--border-card);
}

/* Terminal Card */
.hero-terminal-wrapper {
  perspective: 1000px;
}

.terminal-card {
  background: var(--surface-1);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 0 35px var(--accent-glow);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.terminal-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.6), 0 0 45px rgba(59, 130, 246, 0.25);
  border-color: rgba(59, 130, 246, 0.35);
}

.terminal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #111620;
  padding: 12px 18px;
  border-bottom: 1px solid var(--border-subtle);
}

.terminal-dots {
  display: flex;
  gap: 7px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot-red { background: #EF4444; }
.dot-yellow { background: #F59E0B; }
.dot-green { background: #10B981; }

.terminal-title {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.terminal-badge {
  font-size: 0.72rem;
  font-weight: 600;
  color: #10B981;
  background: rgba(16, 185, 129, 0.12);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.terminal-body {
  padding: 22px;
  font-size: 0.84rem;
  line-height: 1.6;
  background: #0B0E14;
}

.code-line {
  white-space: pre-wrap;
  word-break: break-all;
}

.code-line.empty {
  height: 10px;
}

.indent {
  padding-left: 18px;
}

.indent-2 {
  padding-left: 36px;
}

.token-comment { color: #6E7681; font-style: italic; }
.token-keyword { color: #FF7B72; font-weight: 600; }
.token-def { color: #79C0FF; }
.token-string { color: #A5D6FF; }
.token-number { color: #D2A8FF; }
.token-decorator { color: #FFA657; }
.token-function { color: #D2A8FF; }
.token-key { color: #79C0FF; }
.text-green { color: var(--green-learning); font-weight: 600; }

.terminal-footer-line {
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--accent-light);
}

.terminal-cursor {
  display: inline-block;
  width: 8px;
  height: 15px;
  background: var(--accent-primary);
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@media (max-width: 992px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-terminal-wrapper {
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .terminal-body {
    padding: 16px 12px;
    font-size: 0.78rem;
  }
}
</style>
