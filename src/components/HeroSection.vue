<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      heroData: {
        title: 'Compassionate care, exceptional results.',
        subtitle: 'Our team of experienced professionals are committed to providing quality care and personalized attention to our clients.',
        buttonText: 'See how we work',
        stats: [
          {
            number: '20+',
            label: 'years of experience'
          },
          {
            number: '95%',
            label: 'client satisfaction rating'
          },
          {
            number: '5,000+',
            label: 'clients served annually'
          },
          {
            number: '10+',
            label: 'professionals on staff'
          }
        ],
        badge: {
          avatars: ['👨‍💼', '👩‍💼', '👨‍💻'],
          text: '150K +',
          subtitle: 'Client Success'
        }
      }
    }
  }
}
</script>

<template>
  <section class="hero-section position-relative overflow-hidden">
    <!-- Background Image with Overlay -->
    <div class="hero-background">
      <div class="hero-overlay"></div>
      <img 
        src="/src/assets/bg-bsh.jpg" 
        alt="BSH Team" 
        class="hero-image"
      />
    </div>
    
    <!-- Content Container -->
    <div class="container-fluid h-100">
      <div class="row h-100 align-items-center">
        <!-- Left Content -->
        <div class="col-lg-6 col-xl-5 hero-content">
          <div class="content-wrapper ps-5 pt-5">
            
            <!-- Main Heading -->
            <h1 class="hero-title text-white display-5 fw-bolder mt-5 lh-base">
              {{ heroData.title }}
            </h1>
            
            <!-- Subtitle -->
            <p class="hero-subtitle mb-5">
              {{ heroData.subtitle }}
            </p>
            
            <!-- CTA Button -->
            <div class="hero-cta">
              <button class="btn-play d-flex align-items-center">
                <div class="play-icon me-3">
                  <i class="bi bi-play-fill"></i>
                </div>
                <span>{{ heroData.buttonText }}</span>
              </button>
            </div>
        
          </div>
        </div>
        
        <!-- Right Side - Image Area (handled by background) -->
        <div class="col-lg-6 col-xl-7 position-relative d-flex justify-content-end">
          <!-- Success Badge -->
          <div class="success-badge d-flex p-2 rounded-pill">
            <div class="badge-avatars">
              <span 
                v-for="(avatar, index) in heroData.badge.avatars" 
                :key="index" 
                class="avatar"
                :style="{ zIndex: heroData.badge.avatars.length - index }"
              >
                {{ avatar }}
              </span>
            </div>
            <div class="badge-content text-start mx-2 lh-1">
              <div class="badge-number mb-0 h6">{{ heroData.badge.text }}</div>
              <div class="badge-text small">{{ heroData.badge.subtitle }}</div>
            </div>
          </div>
            
        </div>
      </div>
      
      <!-- Stats Section positioned at bottom right -->
      <div class="position-absolute bottom-0 end-0" style="z-index: 10;">
        <div class="stats-section p-5">
          <div class="row g-3">
            <div v-for="(stat, index) in heroData.stats" :key="index" class="col-3">
              <div class="stat-item text-center">
                <div class="stat-number">{{ stat.number }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: 100vh;
  background-color:  #2f4f66;
  position: relative;
}

.hero-background {
  position: absolute;
  top: 0;
  right: 0;
  width: 90%;
  height: 100%;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to left, rgba(255,0,0,0),  #2f4f66);
  z-index: 2;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero-content {
  position: relative;
  z-index: 3;
  padding-left: 2rem;
  padding-right: 2rem;
}

.content-wrapper {
  width: 600px;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.btn-play {
  background: none;
  border: none;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-play:hover {
  transform: translateX(10px);
}

.play-icon {
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.play-icon:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.play-icon i {
  font-size: 1.2rem;
  margin-left: 3px;
}

.stats-section {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.3);
      border-top-left-radius: var(--bs-border-radius-xxl) !important;
  width: 800px;
  position: relative;
  z-index: 10;
}

.stat-item {
  color: white;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
  line-height: 1.4;
}

.success-badge {
  position: absolute;
  top: 20%;
  right: 5%;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  z-index: 8;
  min-width: 180px;
}

.badge-avatars {
  display: flex;
  justify-content: center;
  position: relative;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-left: -10px;
  border: 3px solid white;
  position: relative;
}

.avatar:first-child {
  margin-left: 0;
}

.badge-number {
  font-weight: 700;
  color: #2c3e50;
}

.badge-text {
  color: #666;
}

.badge-check {
  width: 30px;
  height: 30px;
  background: #28a745;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
  font-size: 0.8rem;
}



/* Responsive Design */
@media (max-width: 991px) {
  .hero-background {
    width: 100%;
    opacity: 0.3;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .content-wrapper {
    padding-top: 4rem;
  }
  
  .success-badge {
    position: static;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  
  .stats-section {
    position: static !important;
    margin-top: 2rem;
    max-width: 100%;
    z-index: auto !important;
  }
  
  .stats-section .row {
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-content {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .stats-section {
    padding: 1.5rem;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}
</style>
