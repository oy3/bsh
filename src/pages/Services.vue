<script>
import BlogCard from '../components/BlogCard.vue'
import blogsData from '../data/blogs.json'

export default {
  name: 'Blog',
  components: {
    BlogCard
  },
  data() {
    return {
      blogs: blogsData.blogs,
      filteredBlogs: blogsData.blogs,
      searchQuery: '',
      selectedCategory: 'All',
      categories: ['All', 'Technology', 'Mental Health', 'Preventive Care', 'Cardiology', 'Pediatrics', 'Women\'s Health'],
      isActive: blogsData.active
    }
  },
  methods: {
    filterBlogs() {
      let filtered = this.blogs;

      // Filter by category
      if (this.selectedCategory !== 'All') {
        filtered = filtered.filter(blog =>
          blog.category === this.selectedCategory
        );
      }

      // Filter by search query
      if (this.searchQuery) {
        filtered = filtered.filter(blog =>
          blog.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          blog.author.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          blog.tags.some(tag => tag.toLowerCase().includes(this.searchQuery.toLowerCase()))
        );
      }

      this.filteredBlogs = filtered;
    },
    selectCategory(category) {
      this.selectedCategory = category;
      this.filterBlogs();
    },
    onSearchInput() {
      this.filterBlogs();
    },
    selectBlog(blog) {
      this.$router.push(`/blog/${blog.slug}`);
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  },
  computed: {
    featuredBlogs() {
      return this.blogs.filter(blog => blog.featured).slice(0, 3);
    },
    latestBlogs() {
      return this.blogs.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)).slice(0, 6);
    }
  },
  watch: {
    searchQuery() {
      this.filterBlogs();
    }
  }
}
</script>

<template>
  <div class="services">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Our Services</h1>
        <p>
          Comprehensive technology solutions tailored to your business needs
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-section">
      <div class="container">
        <h2 class="section-title">What We Offer</h2>
        <div class="services-grid">
          <div
            v-for="service in services"
            :key="service.id"
            class="service-card"
          >
            <div class="service-icon">{{ service.icon }}</div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">
                {{ feature }}
              </li>
            </ul>
            <div class="service-price">{{ service.price }}</div>
            <router-link to="/contact" class="btn btn-primary"
              >Get Quote</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process-section">
      <div class="container">
        <h2 class="section-title">Our Process</h2>
        <div class="process-timeline">
          <div v-for="step in process" :key="step.step" class="process-step">
            <div class="step-number">{{ step.step }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose-us">
      <div class="container">
        <h2 class="section-title">Why Choose BSH?</h2>
        <div class="benefits-grid">
          <div class="benefit">
            <div class="benefit-icon">⚡</div>
            <h3>Fast Delivery</h3>
            <p>Quick turnaround times without compromising quality</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">💎</div>
            <h3>Premium Quality</h3>
            <p>High-quality solutions built to last and scale</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">🎯</div>
            <h3>Custom Solutions</h3>
            <p>Tailored solutions that fit your specific needs</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">🛡️</div>
            <h3>Ongoing Support</h3>
            <p>Comprehensive support and maintenance services</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <h2>Ready to Start Your Project?</h2>
        <p>
          Let's discuss your requirements and create something amazing together
        </p>
        <div class="cta-actions">
          <router-link to="/contact" class="btn btn-primary"
            >Start Project</router-link
          >
          <router-link to="/about" class="btn btn-secondary"
            >Learn More</router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.services {
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 1rem 2rem;
  text-align: center;
}

.page-header h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.page-header p {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.services-section {
  padding: 4rem 1rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e9ecef;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.service-description {
  color: #6c757d;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.service-features li {
  padding: 0.5rem 0;
  color: #555;
  position: relative;
  padding-left: 1.5rem;
}

.service-features li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #42b883;
  font-weight: bold;
}

.service-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #42b883;
  margin-bottom: 1.5rem;
}

.btn {
  padding: 0.75rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background-color: #42b883;
  color: white;
}

.btn-primary:hover {
  background-color: #369870;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: #42b883;
  border: 2px solid #42b883;
}

.btn-secondary:hover {
  background-color: #42b883;
  color: white;
}

.process-section {
  background-color: #f8f9fa;
  padding: 4rem 1rem;
}

.process-timeline {
  max-width: 800px;
  margin: 0 auto;
}

.process-step {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  position: relative;
}

.process-step:not(:last-child)::after {
  content: "";
  position: absolute;
  left: 25px;
  top: 60px;
  width: 2px;
  height: 60px;
  background-color: #42b883;
}

.step-number {
  width: 50px;
  height: 50px;
  background-color: #42b883;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 2rem;
  flex-shrink: 0;
}

.step-content h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.step-content p {
  color: #6c757d;
  line-height: 1.6;
}

.why-choose-us {
  padding: 4rem 1rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.benefit {
  text-align: center;
  padding: 2rem;
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.benefit h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.benefit p {
  color: #6c757d;
  line-height: 1.6;
}

.cta {
  background-color: #2c3e50;
  color: white;
  padding: 4rem 1rem;
  text-align: center;
}

.cta h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .process-step {
    flex-direction: column;
    text-align: center;
  }

  .process-step::after {
    display: none;
  }

  .step-number {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
