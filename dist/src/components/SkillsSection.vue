<template>
  <section class="section skills-section" id="skills">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">
          <span>// Technical Expertise</span>
        </div>
        <h2 class="section-title">Skills &amp; Technologies</h2>
        <p class="section-desc">
          Core backend technologies, database engines, distributed system patterns, and cloud tools I leverage.
        </p>

        <!-- Learning Legend Notice -->
        <div class="learning-legend">
          <span class="legend-chip chip-learning mono">
            Ruby on Rails <span class="star-marker">✦</span>
          </span>
          <span class="legend-text">
            Items highlighted in emerald with <strong class="text-learning">✦</strong> indicate technologies actively being mastered.
          </span>
        </div>
      </div>

      <!-- Categories Grid -->
      <div class="skills-categories-grid">
        <div 
          v-for="cat in skillCategories" 
          :key="cat.category" 
          class="skill-category-card"
        >
          <div class="category-header">
            <div class="category-icon-box">
              <!-- Icons per category -->
              <svg v-if="cat.category === 'Languages'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              <svg v-else-if="cat.category === 'Frameworks'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              <svg v-else-if="cat.category === 'Databases'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
              <svg v-else-if="cat.category === 'APIs & Auth'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <svg v-else-if="cat.category === 'Architecture'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
              </svg>
              <svg v-else-if="cat.category.includes('DevOps')" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
            </div>
            <h3 class="category-name">{{ cat.category }}</h3>
          </div>

          <!-- Skills Chips in Category -->
          <div class="skills-chips-wrapper">
            <span 
              v-for="skill in cat.skills" 
              :key="skill.name"
              :class="['skill-chip mono', { 'chip-learning': skill.isLearning }]"
            >
              {{ skill.name }}
              <span v-if="skill.isLearning" class="star-marker">✦</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  skillCategories: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.learning-legend {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: var(--surface-1);
  border: 1px solid var(--border-card);
  padding: 8px 16px;
  border-radius: var(--radius-full);
  margin-top: 18px;
  font-size: 0.86rem;
}

.legend-chip {
  padding: 3px 10px;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
}

.legend-text {
  color: var(--text-muted);
}

.text-learning {
  color: var(--green-learning);
}

.skills-categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 22px;
}

.skill-category-card {
  background: var(--surface-1);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  padding: 26px;
  transition: transform var(--transition-normal), border-color var(--transition-normal);
}

.skill-category-card:hover {
  transform: translateY(-3px);
  border-color: rgba(59, 130, 246, 0.35);
  background: var(--surface-2);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--border-subtle);
  padding-bottom: 14px;
}

.category-icon-box {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: var(--surface-2);
  border: 1px solid var(--border-card);
  color: var(--accent-light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.category-icon-box svg {
  width: 20px;
  height: 20px;
}

.category-name {
  font-size: 1.15rem;
  color: var(--text-main);
  font-weight: 600;
}

.skills-chips-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-chip {
  display: inline-flex;
  align-items: center;
  font-size: 0.88rem;
  padding: 8px 14px;
  background: rgba(13, 17, 23, 0.6);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-md);
  color: var(--text-main);
  transition: all var(--transition-fast);
}

.skill-chip:hover {
  border-color: var(--accent-primary);
  transform: translateY(-1px);
}

/* Ruby and Rails green glow */
.chip-learning {
  color: var(--green-learning) !important;
  border-color: var(--green-border) !important;
  background: var(--green-glow) !important;
  box-shadow: 0 0 12px rgba(52, 211, 153, 0.15);
}

.chip-learning:hover {
  border-color: var(--green-learning) !important;
  box-shadow: 0 0 16px rgba(52, 211, 153, 0.3);
}

.star-marker {
  font-size: 0.9em;
  margin-left: 6px;
  color: var(--green-learning);
}

@media (max-width: 480px) {
  .skills-categories-grid {
    grid-template-columns: 1fr;
  }

  .learning-legend {
    flex-direction: column;
    align-items: flex-start;
    border-radius: var(--radius-md);
    gap: 8px;
  }
}
</style>
