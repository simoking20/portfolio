<template>
  <section class="section about-section" id="about">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">
          <span>// Profile &amp; Background</span>
        </div>
        <h2 class="section-title">About Me</h2>
        <p class="section-desc">
          Building resilient systems and turning complex business requirements into fast, dependable backend services.
        </p>
      </div>

      <div class="about-grid">
        <!-- Bio Column -->
        <div class="bio-column">
          <div class="bio-card">
            <h3 class="bio-headline">
              Engineering high-concurrency architectures with a passion for clean APIs and databases.
            </h3>
            <div class="bio-paragraphs">
              <p v-for="(paragraph, index) in about.bio" :key="index">
                {{ paragraph }}
              </p>
            </div>

            <!-- University Highlight Box -->
            <div class="edu-highlight">
              <div class="edu-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <div class="edu-info">
                <span class="edu-label mono">Kasdi Merbah University Ouargla</span>
                <p class="edu-detail">Master's (2024–2026) &amp; Licence (2021–2024) in Computer Science</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats & Languages Column -->
        <div class="stats-languages-column">
          <!-- Stats Cards -->
          <div class="stats-grid">
            <div 
              v-for="(stat, index) in about.stats" 
              :key="index" 
              class="stat-card"
            >
              <div class="stat-value mono">{{ stat.value }}</div>
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-subtext">{{ stat.subtext }}</div>
            </div>
          </div>

          <!-- Spoken Languages Box -->
          <div class="languages-card">
            <h4 class="languages-title">
              <span class="mono title-tag">#</span> Spoken Languages
            </h4>
            <div class="languages-list">
              <div 
                v-for="lang in about.spokenLanguages" 
                :key="lang.name" 
                class="language-row"
              >
                <div class="language-info">
                  <span class="lang-flag">{{ lang.flag }}</span>
                  <span class="lang-name">{{ lang.name }}</span>
                  <span class="lang-level mono">{{ lang.level }}</span>
                </div>
                <div class="lang-progress-track">
                  <div 
                    class="lang-progress-bar" 
                    :style="{ width: lang.proficiency + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  about: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 32px;
}

.bio-card {
  background: var(--surface-1);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  padding: 36px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.bio-headline {
  font-size: 1.45rem;
  line-height: 1.4;
  margin-bottom: 20px;
  color: var(--text-main);
}

.bio-paragraphs {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;
}

.bio-paragraphs p {
  font-size: 1.05rem;
  line-height: 1.7;
}

.edu-highlight {
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--surface-2);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 16px 20px;
}

.edu-icon {
  width: 42px;
  height: 42px;
  border-radius: var(--radius-sm);
  background: var(--accent-glow);
  color: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.edu-icon svg {
  width: 22px;
  height: 22px;
}

.edu-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.edu-label {
  font-size: 0.88rem;
  color: var(--accent-light);
  font-weight: 600;
}

.edu-detail {
  font-size: 0.88rem;
  color: var(--text-muted);
}

/* Stats Column */
.stats-languages-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.stat-card {
  background: var(--surface-1);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  padding: 22px 16px;
  text-align: center;
  transition: transform var(--transition-normal), border-color var(--transition-normal);
}

.stat-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-primary);
  background: var(--surface-2);
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-light);
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 4px;
}

.stat-subtext {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.3;
}

/* Languages Card */
.languages-card {
  background: var(--surface-1);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  padding: 28px 30px;
}

.languages-title {
  font-size: 1.15rem;
  margin-bottom: 22px;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-tag {
  color: var(--accent-light);
}

.languages-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.language-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 0.95rem;
}

.lang-flag {
  font-size: 1.2rem;
  margin-right: 8px;
}

.lang-name {
  font-weight: 600;
  color: var(--text-main);
  flex-grow: 1;
}

.lang-level {
  font-size: 0.82rem;
  color: var(--text-muted);
  background: var(--surface-2);
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
}

.lang-progress-track {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.lang-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary) 0%, var(--accent-light) 100%);
  border-radius: var(--radius-full);
  transition: width 1s ease-in-out;
}

@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 540px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .bio-card {
    padding: 24px 20px;
  }

  .languages-card {
    padding: 22px 18px;
  }
}
</style>
