<script>
export default {
  name: "BlogSection",
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "How to live a healthy life without pain or disease",
          image:
            "https://media.post.rvohealth.io/wp-content/uploads/sites/4/2022/03/264356-Meditation-for-Beginners_-A-Guide-1296x728-header-1024x576.jpg",
          author: "John Doe",
          date: "13 Sep, 2025",
        },
        {
          id: 2,
          title: "The importance of regular exercise for mental health",
          image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          author: "Dr. Sarah Johnson",
          date: "10 Sep, 2025",
        },
        {
          id: 3,
          title: "Understanding nutrition and its impact on your body",
          image:
            "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          author: "Dr. Michael Brown",
          date: "8 Sep, 2025",
        },
      ],
    };
  },
};
</script>

<template>
  <section class="py-5 px-md-5 px-3">
    <h6 class="text-uppercase border-bsh-accent border-start border-3 ps-2">
      Blogs & Articles
    </h6>
    <div class="d-flex justify-content-between mb-5">
      <h2 class="fw-bold mb-0">Read top articles from expert doctors</h2>
      <router-link
        to="/blog"
        class="link-success link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
      >
        <span class="text-muted small d-flex align-items-center">
          View More
          <i
            class="bi bi-arrow-up-short text-bsh-accent h3 d-inline-block mb-0"
            style="transform: rotate(45deg)"
          ></i>
        </span>
      </router-link>
    </div>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="blog in blogs" :key="blog.id">
        <div class="card border-light-subtle rounded-4 h-100">
          <img
            :src="blog.image"
            :alt="blog.title"
            class="card-img-top p-2 object-fit-cover rounded-4"
            height="200"
          />
          <div class="card-body">
            <div class="d-flex mb-3">
              <div class="me-5">
                <i class="bi bi-person me-2 text-primary text-bsh-accent"></i>
                <small class="text-muted">{{ blog.author }}</small>
              </div>
              <div>
                <i class="bi bi-calendar-event me-2 text-bsh-accent"></i>
                <small class="text-muted">{{ blog.date }}</small>
              </div>
            </div>

            <h5 class="card-title fw-bold">{{ blog.title }}</h5>
          </div>
          <div class="card-footer border-top-0 bg-white rounded-bottom-4 d-flex">
            <router-link
              to="/blog"
              class="link-success link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
            >
              <span class="text-body-secondary d-flex align-items-center">
                <small> Read More </small>
                <i
                  class="bi bi-arrow-up-short h3 d-inline-block mb-0 text-bsh-accent"
                  style="transform: rotate(45deg)"
                ></i>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any blog-specific styles here if needed */
</style>
