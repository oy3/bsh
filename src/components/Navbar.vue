<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrolled: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg" :class="{ 'scrolled bg-bsh-primary': scrolled }">

    <div class="container-fluid mx-0 mx-md-5">

      <div class="navbar-brand d-flex align-items-center">
        <img src="/src/assets/bsh.svg" alt="" class="me-2" width="25" />
        <h4 class="mb-0 fw-bold text-white">BSH</h4>
      </div>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 small">
          <li class="nav-item px-4">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item px-4">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item px-4">
            <router-link to="/doctors" class="nav-link"> Doctors</router-link>
          </li>
          <li class="nav-item px-4">
            <router-link to="/services" class="nav-link">
              Find Services</router-link>
          </li>
          <li class="nav-item px-4">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>

  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background-color: transparent;
}

.navbar-transparent {
  background-color: transparent;
  backdrop-filter: blur(10px);
}

.navbar.scrolled {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.brand-link {
  text-decoration: none;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  color: white !important;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  font-weight: 700;
}

/* .nav-link.router-link-active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #4a90e2;
  font-weight: 700;
} */

.menu-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.menu-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.1);
}

.menu-btn {
  display: none;
}

@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }

  .menu-btn {
    display: block;
  }

  .nav-container {
    padding: 0 1rem;
  }
}
@media (max-width: 991px) {
  .navbar-collapse {
    background-color: var(--bsh-primary);
    padding: 1rem;
    border-radius: .5rem;
    margin-top: .5rem;
    backdrop-filter: blur(10px);
    /* opacity: 0.9; */
  }
}
</style>
