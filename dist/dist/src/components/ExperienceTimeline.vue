<template>
  <section class="section timeline-section" id="experience">
    <div class="container">
      <div class="section-header">
        <div class="section-tag">
          <span>// Journey &amp; Education</span>
        </div>
        <h2 class="section-title">Experience &amp; Academic Timeline</h2>
        <p class="section-desc">
          Chronological progression across formal computer science degrees, commercial startup ventures, and graduation engineering.
        </p>
      </div>

      <div class="timeline-container">
        <div class="timeline-line"></div>

        <div 
          v-for="(item, index) in timeline" 
          :key="index"
          :class="['timeline-item', item.type]"
        >
          <!-- Glowing Node Marker -->
          <div class="timeline-marker">
            <div class="marker-dot"></div>
            <div class="marker-ring"></div>
          </div>

          <!-- Timeline Card -->
          <div class="timeline-content-card">
            <div class="timeline-header-meta">
              <span class="timeline-period mono">{{ item.period }}</span>
              <span :class="['timeline-badge mono', item.type]">
                {{ item.type === 'education' ? 'Academic' : (item.type === 'project' ? 'Grad Project' : 'Startup') }}
              </span>
            </div>

            <h3 class="timeline-role-title">{{ item.title }}</h3>
            
            <div class="timeline-org-row">
              <span class="timeline-org">{{ item.organization }}</span>
              <span class="dot-sep">•</span>
              <span class="timeline-loc">{{ item.location }}</span>
            </div>

            <p class="timeline-desc">{{ item.description }}</p>

            <div class="timeline-tags">
              <span 
                v-for="tag in item.tags" 
                :key="tag" 
                class="timeline-tag mono"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  timeline: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.timeline-container {
  position: relative;
  max-width: 860px;
  margin: 0 auto;
  padding: 20px 0;
}

.timeline-line {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  width: 2px;
  background: linear-gradient(
    180deg, 
    rgba(59, 130, 246, 0.8) 0%, 
    rgba(59, 130, 246, 0.2) 50%, 
    rgba(255, 255, 255, 0.05) 100%
  );
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 60px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

/* Glowing Marker */
.timeline-marker {
  position: absolute;
  top: 6px;
  left: 11px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.marker-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent-primary);
  box-shadow: 0 0 10px var(--accent-primary);
  z-index: 2;
  transition: transform var(--transition-fast);
}

.timeline-item:hover .marker-dot {
  transform: scale(1.3);
  background: var(--accent-light);
}

.timeline-item.project .marker-dot {
  background: var(--green-learning);
  box-shadow: 0 0 10px var(--green-learning);
}

/* Card */
.timeline-content-card {
  background: var(--surface-1);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  padding: 26px 28px;
  transition: transform var(--transition-normal), border-color var(--transition-normal);
}

.timeline-content-card:hover {
  transform: translateX(4px);
  border-color: rgba(59, 130, 246, 0.4);
  background: var(--surface-2);
}

.timeline-header-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.timeline-period {
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--accent-light);
}

.timeline-badge {
  font-size: 0.74rem;
  padding: 3px 10px;
  border-radius: var(--radius-sm);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.timeline-badge.education {
  background: rgba(59, 130, 246, 0.12);
  color: var(--accent-light);
  border: 1px solid rgba(59, 130, 246, 0.25);
}

.timeline-badge.experience {
  background: rgba(245, 158, 11, 0.12);
  color: #FBBF24;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.timeline-badge.project {
  background: var(--green-glow);
  color: var(--green-learning);
  border: 1px solid var(--green-border);
}

.timeline-role-title {
  font-size: 1.3rem;
  color: var(--text-main);
  margin-bottom: 6px;
}

.timeline-org-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.92rem;
  color: var(--text-muted);
  margin-bottom: 14px;
}

.timeline-org {
  color: var(--text-sub);
  font-weight: 500;
}

.dot-sep {
  color: var(--border-card);
}

.timeline-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-sub);
  margin-bottom: 18px;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.timeline-tag {
  font-size: 0.75rem;
  background: rgba(13, 17, 23, 0.6);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  padding: 3px 9px;
  border-radius: var(--radius-sm);
}

@media (max-width: 600px) {
  .timeline-item {
    padding-left: 45px;
  }

  .timeline-line {
    left: 12px;
  }

  .timeline-marker {
    left: 3px;
  }

  .timeline-content-card {
    padding: 20px 16px;
  }

  .timeline-role-title {
    font-size: 1.15rem;
  }
}
</style>
