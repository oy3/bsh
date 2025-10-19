<script>
import blogsData from '../data/blogs.json'

export default {
  name: 'BlogDetail',
  data() {
    return {
      blog: null,
      loading: true,
      error: false,
      relatedBlogs: []
    }
  },
  created() {
    this.fetchBlog()
  },
  watch: {
    '$route'() {
      this.fetchBlog()
    }
  },
  methods: {
    fetchBlog() {
      this.loading = true
      const slug = this.$route.params.slug
      this.blog = blogsData.blogs.find(b => b.slug === slug)
      
      if (!this.blog) {
        this.error = true
      } else {
        // Get related blogs (same category, exclude current blog)
        this.relatedBlogs = blogsData.blogs
          .filter(b => b.category === this.blog.category && b.id !== this.blog.id)
          .slice(0, 3)
      }
      
      this.loading = false
    },
    goBack() {
      this.$router.go(-1)
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    goToBlog(blog) {
      this.$router.push(`/blog/${blog.slug}`)
    }
  }
}
</script>

<template>
  <div class="blog-detail">
    <!-- Loading State -->
    <div v-if="loading" class="d-flex justify-content-center align-items-center min-vh-100">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <i class="bi bi-exclamation-triangle text-warning display-1"></i>
      <h3 class="mt-3">Article Not Found</h3>
      <p class="text-muted">The article you're looking for doesn't exist.</p>
      <router-link to="/blog" class="btn btn-primary">
        <i class="bi bi-arrow-left me-2"></i>Back to Blog
      </router-link>
    </div>

    <!-- Blog Content -->
    <div v-else>
      <!-- Hero Section -->
      <section class="blog-hero position-relative">
        <div class="blog-hero-image">
          <img 
            :src="blog.image" 
            :alt="blog.title"
            class="w-100"
            style="height: 70vh; object-fit: cover;"
          >
          <div class="blog-hero-overlay position-absolute top-0 start-0 w-100 h-100"></div>
        </div>
        
        <div class="position-absolute bottom-0 start-0 w-100 p-md-5 p-3">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-8">
                <!-- Category Badge -->
                <span class="badge bg-primary mb-3 fs-6 px-3 py-2">{{ blog.category }}</span>
                
                <!-- Title -->
                <h1 class="display-4 fw-bold text-white mb-3">{{ blog.title }}</h1>
                
                <!-- Meta Info -->
                <div class="d-flex align-items-center text-white-50">
                  <img
                    :src="blog.author.image"
                    :alt="blog.author.name"
                    class="rounded-circle me-3"
                    width="48"
                    height="48"
                    style="object-fit: cover;"
                  />
                  <div>
                    <div class="fw-semibold text-white">{{ blog.author.name }}</div>
                    <small>{{ formatDate(blog.publishedDate) }} • {{ blog.readTime }} min read</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Content -->
      <section class="py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <!-- Back Button -->
              <div class="mb-4">
                <button @click="goBack" class="btn btn-outline-primary">
                  <i class="bi bi-arrow-left me-2"></i>Back to Blog
                </button>
              </div>

              <!-- Article Content -->
              <article class="blog-content">
                <!-- Excerpt -->
                <div class="lead text-muted mb-4 p-4 bg-light rounded-3 border-start border-primary border-4">
                  {{ blog.excerpt }}
                </div>

                <!-- Main Content -->
                <div class="fs-5 lh-lg text-dark mb-4" v-html="blog.content.replace(/\n/g, '<br><br>')"></div>

                <!-- Tags -->
                <div class="mb-4">
                  <h6 class="fw-bold mb-3">Tags:</h6>
                  <div class="d-flex flex-wrap gap-2">
                    <span 
                      v-for="tag in blog.tags" 
                      :key="tag"
                      class="badge bg-light text-dark border px-3 py-2"
                    >
                      #{{ tag }}
                    </span>
                  </div>
                </div>

                <!-- Author Bio -->
                <div class="card border-0 bg-light p-4 mb-5">
                  <div class="d-flex align-items-center">
                    <img
                      :src="blog.author.image"
                      :alt="blog.author.name"
                      class="rounded-circle me-4"
                      width="80"
                      height="80"
                      style="object-fit: cover;"
                    />
                    <div>
                      <h5 class="fw-bold mb-1">{{ blog.author.name }}</h5>
                      <p class="text-muted mb-0">{{ blog.author.bio }}</p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Articles -->
      <section v-if="relatedBlogs.length > 0" class="py-5 bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <h3 class="fw-bold mb-4">Related Articles</h3>
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" v-for="relatedBlog in relatedBlogs" :key="relatedBlog.id">
                  <div @click="goToBlog(relatedBlog)" class="card border-0 h-100 shadow-sm cursor-pointer blog-card">
                    <img
                      :src="relatedBlog.image"
                      :alt="relatedBlog.title"
                      class="card-img-top"
                      style="height: 200px; object-fit: cover;"
                    />
                    <div class="card-body">
                      <span class="badge bg-primary mb-2">{{ relatedBlog.category }}</span>
                      <h6 class="card-title fw-bold">{{ relatedBlog.title }}</h6>
                      <p class="card-text text-muted small line-clamp-2">{{ relatedBlog.excerpt }}</p>
                      <div class="d-flex align-items-center mt-3">
                        <img
                          :src="relatedBlog.author.image"
                          :alt="relatedBlog.author.name"
                          class="rounded-circle me-2"
                          width="24"
                          height="24"
                          style="object-fit: cover;"
                        />
                        <small class="text-muted">{{ relatedBlog.author.name }}</small>
                      </div>
                    </div>
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
.min-vh-100 {
  min-height: 100vh;
}

.blog-hero-overlay {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

.blog-content {
  line-height: 1.8;
}

.blog-content p {
  margin-bottom: 1.5rem;
}

.cursor-pointer {
  cursor: pointer;
}

.blog-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 768px) {
  .display-4 {
    font-size: 2rem !important;
  }
  
  /* .blog-hero-image img {
    height: 40vh !important;
  } */
}
</style>