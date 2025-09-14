<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="bg-bsh-secondary text-white py-5">
    <div class="container-fluid px-md-5 px-3">
      <div class="row g-4">
        <!-- Company Info & Newsletter -->
        <div class="col-lg-4 col-md-6">
          <div class="d-flex align-items-center mb-3">
            <img src="/src/assets/bsh.svg" alt="" class="me-2" width="30" />
            <h4 class="mb-0 fw-bold text-white">BSH</h4>
          </div>
          <p class="text-light mb-4 small">
            BSH a world of comprehensive healthcare where your well-being takes
            center stage. At BSH, we're dedicated to providing you with
            personalized and compassionate medical services.
          </p>

          <!-- Newsletter Subscription -->
          <div class="mb-4">
            <div class="input-group">
              <input
                type="email"
                class="form-control bg-transparent border-light text-white"
                placeholder="Email Address"
                style="border-color: rgba(255, 255, 255, 0.3) !important"
              />
              <button class="btn btn-bsh-accent" type="button">
                Subscribe
              </button>
            </div>
          </div>

          <!-- Social Media Icons -->
          <div class="d-flex gap-3">
            <a href="#" class="text-white-50 hover-accent">
              <i class="bi bi-facebook fs-5"></i>
            </a>
            <a href="#" class="text-white-50 hover-accent">
              <i class="bi bi-instagram fs-5"></i>
            </a>
            <a href="#" class="text-white-50 hover-accent">
              <i class="bi bi-twitter-x fs-5"></i>
            </a>
            <a href="#" class="text-white-50 hover-accent">
              <i class="bi bi-youtube fs-5"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-lg-2 col-md-6">
          <ul class="list-unstyled">
            <li class="mb-2 py-3">
              <router-link
                to="/about"
                class="text-light text-decoration-none hover-accent"
                >About Us</router-link
              >
            </li>
            <li class="mb-2 py-3">
              <a href="#" class="text-light text-decoration-none hover-accent"
                >Doctors</a
              >
            </li>
            <li class="mb-2 py-3">
              <router-link
                to="/services"
                class="text-light text-decoration-none hover-accent"
                >Our Services</router-link
              >
            </li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-6">
          <ul class="list-unstyled">
            <li class="mb-2 py-3">
              <a href="#" class="text-light text-decoration-none hover-accent"
                >Appointment</a
              >
            </li>
            <li class="mb-2 py-3">
              <router-link
                to="/"
                class="text-light text-decoration-none hover-accent"
                >Blog</router-link
              >
            </li>
            <li class="mb-2 py-3">
              <router-link
                to="/contact"
                class="text-light text-decoration-none hover-accent"
                >Contact Us</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="col-lg-4 col-md-6">
          <div class="mb-5">
            <h6 class="mb-3">Address</h6>
            <p class="text-light small mb-1">
              22 Demurin Street, Alapere, LA 100001
            </p>
            <p class="text-light small">Nigeria</p>
          </div>

          <div class="mb-2">
            <h6 class="mb-3">Contact</h6>
            <i class="bi bi-telephone text-bsh-accent me-2"></i>
            <span class="text-light small">+234 123 456 7890</span>
          </div>
          <div class="mb-2">
            <i class="bi bi-envelope text-bsh-accent me-2"></i>
            <span class="text-light small text-break"
              >info@basespecialisthospital.com</span
            >
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <hr class="border-light opacity-25 my-4" />
      <div class="row align-items-center">
        <div class="col-md-6">
          <p class="text-light small mb-0">
            &copy; 2025 BSH. All rights reserved.
          </p>
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-md-end gap-4">
            <a
              href="#"
              class="text-light small text-decoration-none hover-accent"
              >Privacy Policy</a
            >
            <a
              href="#"
              class="text-light small text-decoration-none hover-accent"
              >Terms & Conditions</a
            >
            <a
              href="#"
              class="text-light small text-decoration-none hover-accent"
              >License</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.hover-accent:hover {
  color: var(--bsh-accent) !important;
  transition: color 0.3s ease;
}

.form-control:focus {
  border-color: var(--bsh-accent) !important;
  box-shadow: 0 0 0 0.2rem rgba(66, 184, 131, 0.25) !important;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.6) !important;
}

.input-group .form-control {
  border-right: none;
}

.input-group .btn {
  border-left: none;
  border-color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .d-flex.justify-content-md-end {
    justify-content: center !important;
  }
}
</style>
