<template>
  <section class="section projects-section" id="projects">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">
          <span>// Featured Works</span>
        </div>
        <h2 class="section-title">Production Systems &amp; Projects</h2>
        <p class="section-desc">
          Backend infrastructure, enterprise platforms, and startup products engineered for reliability, security, and scale.
        </p>
      </div>

      <div class="projects-grid">
        <article 
          v-for="project in projects" 
          :key="project.id"
          :class="['project-card', { 'flagship-card': project.isFlagship }]"
        >
          <!-- Card Header & Badges -->
          <div class="project-header">
            <div class="project-badge-row">
              <span class="project-badge mono">{{ project.badge }}</span>
              <span class="project-period mono">{{ project.period }}</span>
            </div>
            <h3 class="project-title">{{ project.title }}</h3>
            <div class="project-role mono">
              <span class="role-marker">›</span> {{ project.role }}
            </div>
          </div>

          <!-- Description -->
          <p class="project-description">
            {{ project.description }}
          </p>

          <!-- Highlights -->
          <div class="project-highlights">
            <h4 class="highlights-title mono">Key Engineering Achievements</h4>
            <ul class="highlights-list">
              <li v-for="(highlight, idx) in project.highlights" :key="idx">
                <span class="bullet">▹</span>
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>

          <!-- Stack Tags & Footer -->
          <div class="project-footer">
            <div class="stack-chips">
              <span 
                v-for="tech in project.stack" 
                :key="tech" 
                class="stack-chip mono"
              >
                {{ tech }}
              </span>
            </div>

            <div class="project-actions">
              <a 
                :href="project.links.github" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-project-link mono"
                title="View on GitHub"
              >
                <svg class="icon-link" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                <span>Code Repository</span>
                <svg class="icon-external" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  projects: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.project-card {
  background: var(--surface-1);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(59, 130, 246, 0.4);
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45), 0 0 25px rgba(59, 130, 246, 0.1);
  background: var(--surface-2);
}

.flagship-card {
  border-color: rgba(59, 130, 246, 0.3);
  background: linear-gradient(180deg, rgba(28, 35, 51, 0.8) 0%, rgba(22, 27, 34, 0.95) 100%);
}

.flagship-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-light));
}

.project-badge-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 8px;
}

.project-badge {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-light);
  background: var(--accent-glow);
  padding: 3px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(59, 130, 246, 0.25);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.project-period {
  font-size: 0.8rem;
  color: var(--text-muted);
}

.project-title {
  font-size: 1.65rem;
  color: var(--text-main);
  margin-bottom: 6px;
}

.project-role {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.role-marker {
  color: var(--accent-primary);
  font-weight: bold;
}

.project-description {
  font-size: 0.96rem;
  line-height: 1.65;
  color: var(--text-sub);
  margin-bottom: 22px;
}

.project-highlights {
  margin-bottom: 28px;
  background: rgba(13, 17, 23, 0.5);
  border-radius: var(--radius-md);
  padding: 16px;
  border: 1px solid var(--border-subtle);
}

.highlights-title {
  font-size: 0.78rem;
  text-transform: uppercase;
  color: var(--text-muted);
  letter-spacing: 0.05em;
  margin-bottom: 10px;
}

.highlights-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.highlights-list li {
  font-size: 0.88rem;
  color: var(--text-sub);
  line-height: 1.5;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.bullet {
  color: var(--accent-light);
  font-size: 0.9rem;
  line-height: 1.4;
  flex-shrink: 0;
}

.project-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.stack-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.stack-chip {
  font-size: 0.78rem;
  background: var(--surface-1);
  color: var(--text-muted);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border-subtle);
  transition: color var(--transition-fast), border-color var(--transition-fast);
}

.project-card:hover .stack-chip {
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--text-sub);
}

.project-actions {
  border-top: 1px solid var(--border-subtle);
  padding-top: 16px;
}

.btn-project-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--accent-light);
  transition: all var(--transition-fast);
}

.btn-project-link:hover {
  color: #FFFFFF;
  transform: translateX(3px);
}

.icon-link {
  width: 15px;
  height: 15px;
}

.icon-external {
  width: 13px;
  height: 13px;
}

@media (max-width: 1100px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

@media (max-width: 480px) {
  .project-card {
    padding: 24px 18px;
  }
}
</style>
