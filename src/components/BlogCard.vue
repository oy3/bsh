<script>
export default {
  name: 'BlogCard',
  props: {
    blog: {
      type: Object,
      required: true,
      validator(value) {
        return value && 
               typeof value.title === 'string' && 
               typeof value.excerpt === 'string' && 
               typeof value.image === 'string' &&
               value.author && typeof value.author.name === 'string';
      }
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  }
}
</script>

<template>
  <div class="card border-0 h-100 shadow-sm blog-card">
    <!-- Featured Badge -->
    <div v-if="blog.featured" class="position-relative">
      <span class="badge bg-bsh-accent position-absolute top-0 start-0 m-3 z-3">
        Featured
      </span>
    </div>
    
    <!-- Blog Image -->
    <div class="position-relative overflow-hidden">
      <img
        :src="blog.image"
        :alt="blog.title"
        class="card-img-top blog-image"
        style="height: 250px; object-fit: cover;"
      />
      <div class="blog-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end">
        <div class="p-3">
          <span class="badge bg-primary mb-2">{{ blog.category }}</span>
        </div>
      </div>
    </div>

    <div class="card-body p-4">
      <!-- Blog Title -->
      <h5 class="card-title fw-bold mb-3 text-dark">{{ blog.title }}</h5>
      
      <!-- Blog Excerpt -->
      <p class="card-text text-muted mb-3 line-clamp-3">{{ blog.excerpt }}</p>
      
      <!-- Blog Meta -->
      <div class="d-flex align-items-center justify-content-between mt-auto">
        <div class="d-flex align-items-center">
          <img
            :src="blog.author.image"
            :alt="blog.author.name"
            class="rounded-circle me-2"
            width="32"
            height="32"
            style="object-fit: cover;"
          />
          <div>
            <small class="text-muted d-block">{{ blog.author.name }}</small>
            <small class="text-muted">{{ formatDate(blog.publishedDate) }}</small>
          </div>
        </div>
        <div class="text-end">
          <small class="text-muted d-flex align-items-center">
            <i class="bi bi-clock me-1"></i>
            {{ blog.readTime }} min read
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
}

.blog-image {
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image {
  transform: scale(1.05);
}

.blog-overlay {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.blog-card:hover .blog-overlay {
  opacity: 1;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.z-3 {
  z-index: 3;
}
</style>