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
  <div class="blog-page">
    <!-- Coming Soon View -->
    <div v-if="!isActive" class="coming-soon-container">
      <section class="min-vh-100 d-flex align-items-center justify-content-center bg-bsh-primary">
        <div class="container text-center">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="coming-soon-content text-white">
                <i class="bi bi-newspaper display-1 mb-4 text-bsh-accent"></i>
                <h1 class="display-3 fw-bold mb-4">Blog Coming Soon</h1>
                <p class="lead mb-4">
                  We're working hard to bring you insightful articles and health tips. 
                  Our blog will feature expert advice from our medical professionals.
                </p>
                <div class="d-flex justify-content-center align-items-center gap-4">
                  <div class="text-center">
                    <i class="bi bi-heart-pulse fs-1 text-bsh-accent"></i>
                    <p class="small mt-2">Health Tips</p>
                  </div>
                  <div class="text-center">
                    <i class="bi bi-chat-dots fs-1 text-bsh-accent"></i>
                    <p class="small mt-2">Expert Advice</p>
                  </div>
                  <div class="text-center">
                    <i class="bi bi-book fs-1 text-bsh-accent"></i>
                    <p class="small mt-2">Latest Research</p>
                  </div>
                </div>
                <router-link to="/" class="btn btn-light btn-lg mt-4 rounded-pill px-5">
                  <i class="bi bi-arrow-left me-2"></i>Back to Home
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Active Blog View -->
    <div v-else>
      <!-- Hero Banner -->
      <section class="hero-banner position-relative overflow-hidden py-5 bg-bsh-primary">
        <div class="container-fluid px-md-5 px-3">
          <div class="row min-vh-50 d-flex align-items-center justify-content-center text-center py-5">
            <div class="col-lg-8">
              <h6 class="text-white text-uppercase mb-3 fw-light">
                Health & Wellness
              </h6>
              <h1 class="text-white display-4 fw-bold">
                Our Health Blog
              </h1>
              <p class="text-white-50 lead mt-3">
                Expert insights, health tips, and medical advice from our professional team
              </p>
            </div>
          </div>

          <!-- Filter Section -->
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-8">
              <div class="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                <button
                  v-for="category in categories"
                  :key="category"
                  type="button"
                  class="btn btn-sm rounded-pill px-4"
                  :class="selectedCategory === category 
                    ? 'btn-primary text-white' 
                    : 'btn-outline-light text-white border-white'"
                  @click="selectCategory(category)"
                >
                  {{ category }}
                </button>
              </div>
            </div>
            <div class="col-lg-4 mt-3 mt-lg-0">
              <div class="position-relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  class="form-control rounded-pill py-2 px-4 pe-5"
                  placeholder="Search articles..."
                  @input="onSearchInput"
                >
                <i class="bi bi-search position-absolute end-0 top-50 translate-middle-y me-3 text-muted"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Blogs Section -->
      <section v-if="featuredBlogs.length > 0 && selectedCategory === 'All' && !searchQuery" class="py-5 bg-light">
        <div class="container-fluid px-md-5 px-3">
          <div class="row mb-4">
            <div class="col-12">
              <h2 class="fw-bold mb-1">Featured Articles</h2>
              <p class="text-muted">Handpicked articles from our medical experts</p>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-lg-3 g-4">
            <div class="col" v-for="blog in featuredBlogs" :key="blog.id">
              <div @click="selectBlog(blog)" class="cursor-pointer">
                <BlogCard :blog="blog" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- All Blogs Section -->
      <section class="py-5">
        <div class="container-fluid px-md-5 px-3">
          <div class="row">
            <div class="col-12">
              <div class="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h2 class="fw-bold mb-1">
                    {{ selectedCategory === 'All' ? 'Latest Articles' : selectedCategory + ' Articles' }}
                  </h2>
                  <p class="text-muted mb-0">
                    {{ filteredBlogs.length }} article{{ filteredBlogs.length !== 1 ? 's' : '' }} found
                  </p>
                </div>
              </div>
              
              <!-- No Results -->
              <div v-if="filteredBlogs.length === 0" class="text-center py-5">
                <i class="bi bi-search text-muted display-1"></i>
                <h4 class="text-muted mt-3">No articles found</h4>
                <p class="text-muted">Try adjusting your search criteria or category filter</p>
              </div>
              
              <!-- Blogs Grid -->
              <div v-else class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                <div class="col" v-for="blog in filteredBlogs" :key="blog.id">
                  <div @click="selectBlog(blog)" class="cursor-pointer">
                    <BlogCard :blog="blog" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.blog-page {
  min-height: 100vh;
}

.hero-banner {
  background: linear-gradient(
    135deg,
    var(--bsh-primary) 0%,
    var(--bsh-secondary) 100%
  );
  min-height: 50vh;
}

.min-vh-50 {
  min-height: 50vh;
}

.cursor-pointer {
  cursor: pointer;
}

.coming-soon-content {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-banner {
    min-height: 40vh;
  }

  .min-vh-50 {
    min-height: 40vh;
  }

  .hero-banner h1 {
    font-size: 2.5rem !important;
  }
  
  .display-3 {
    font-size: 2rem !important;
  }
}
</style>