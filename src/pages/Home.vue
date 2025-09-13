<script lang="js">
import HeroSection from '../components/HeroSection.vue'

export default {
    name: 'Home',
    components: {
        HeroSection
    },
    data() {
        return {
            services: [
                {
                    id: 1,
                    title: 'Dentist',
                    description: 'Cutting-edge solutions for modern challenges',
                    icon: 'heart-pulse-fill'
                },
                {
                    id: 2,
                    title: 'Pediatrics',
                    description: 'Delivering excellence in every project',
                    icon: 'heart-pulse-fill'
                },
                {
                    id: 3,
                    title: 'Cardiology',
                    description: '24/7 customer support and maintenance',
                    icon: 'heart-pulse-fill'
                },
                {
                    id: 4,
                    title: 'Dermatology',
                    description: 'Cutting-edge solutions for modern challenges',
                    icon: 'heart-pulse-fill'
                },
                {
                    id: 5,
                    title: 'Gynecology',
                    description: 'Delivering excellence in every project',
                    icon: 'heart-pulse-fill'
                },
                {
                    id: 6,
                    title: 'Orthopedics',
                    description: '24/7 customer support and maintenance',
                    icon: 'heart-pulse-fill'
                },
            ],
            doctors: [
                {
                    id: 1,
                    name: 'Dr. Fiona Wood',
                    specialty: 'Cardiology',
                    image: 'https://media.istockphoto.com/id/2050883733/photo/happy-successful-doctor-woman-medical-worker-in-white-lab-coat-standing-with-crossed-arms-on.jpg?s=612x612&w=0&k=20&c=XOMsFZDPrgn_jG9_702BTXyz114CxJwS2C45KYnLOqQ=',
                },
                {
                    id: 2,
                    name: 'Dr. Sarah Johnson',
                    specialty: 'Pediatrics',
                    image: 'https://www.shutterstock.com/image-photo/female-healthcare-professional-portrait-600nw-2218001039.jpg'
                },
                {
                    id: 3,
                    name: 'Dr. Michael Brown',
                    specialty: 'Neurology',
                    image: 'https://images.unsplash.com/photo-1605602517387-ec78b947335e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJsYWNrJTIwZG9jdG9yfGVufDB8fDB8fHww'
                },
                {
                    id: 4,
                    name: 'Dr. Angela Davis',
                    specialty: 'Dermatology',
                    image: 'https://media.istockphoto.com/id/1603361100/photo/portrait-of-black-woman-in-pharmacy-with-tablet-smile-and-online-inventory-list-for-medicine.jpg?s=612x612&w=0&k=20&c=XmWkRM4DHvtVUPNG_7uzaKFhWumBN2egZMgAK7ENomk='
                }
            ],
            blogs: [
                {
                    id: 1,
                    title: 'How to live a healthy life without pain or disease',
                    image: 'https://media.post.rvohealth.io/wp-content/uploads/sites/4/2022/03/264356-Meditation-for-Beginners_-A-Guide-1296x728-header-1024x576.jpg',
                    author: 'John Doe',
                    date: '13 Sep, 2025'
                },
                {
                    id: 2,
                    title: 'The importance of regular exercise for mental health',
                    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    author: 'Dr. Sarah Johnson',
                    date: '10 Sep, 2025'
                },
                {
                    id: 3,
                    title: 'Understanding nutrition and its impact on your body',
                    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    author: 'Dr. Michael Brown',
                    date: '8 Sep, 2025'
                }
            ],
            testimonials: [
                {
                    id: 1,
                    name: 'John Doe',
                    rating: 3,
                    text: 'BSH has been a lifesaver for my family. The staff is friendly and the services are top-notch. I highly recommend BSH to anyone in need of healthcare.',
                    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D'
                },
                {
                    id: 2,
                    name: 'Mary Ann',
                    rating: 5,
                    text: 'I had a fantastic experience at BSH. The staff was friendly, and the services were top-notch. I highly recommend BSH to anyone in need of healthcare.',
                    avatar: 'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8fDA%3D'
                },
                {
                    id: 3,
                    name: 'Robert Smith',
                    rating: 4,
                    text: 'Outstanding medical care and professional staff. BSH exceeded my expectations in every way possible.',
                    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                },
                {
                    id: 4,
                    name: 'Lisa Johnson',
                    rating: 5,
                    text: 'The best healthcare experience I have ever had. Professional, caring, and efficient service.',
                    avatar: 'https://img.freepik.com/free-photo/african-teenage-girl-portrait-happy-smiling-face_53876-146757.jpg?semt=ais_hybrid&w=740&q=80'
                }
            ]
        }
    },
    methods: {
        scrollTestimonials(direction) {
            const container = this.$refs.testimonialsContainer;
            const scrollAmount = 400;
            if (direction === 'left') {
                container.scrollLeft -= scrollAmount;
            } else {
                container.scrollLeft += scrollAmount;
            }
        },
        renderStars(rating) {
            const stars = [];
            for (let i = 1; i <= 5; i++) {
                stars.push(i <= rating ? 'bi-star-fill' : 'bi-star');
            }
            return stars;
        }
    }
}
</script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Services -->
    <section class="bg-white py-5 px-md-5 px-3">
      <h6 class="text-uppercase border-bsh-accent border-start border-3 ps-2">
        Health Solutions
      </h6>
      <h2 class="fw-bold mb-5">Healthcare services for your well-being</h2>

      <div class="row g-4">
        <div class="col-md-4" v-for="service in services" :key="service.id">
          <div class="card p-3 h-100 rounded-4 border-light-subtle">
            <div class="card-header bg-white border-bottom-0">
              <i
                class="d-flex align-items-center justify-content-center border rounded-3 fs-3 text-bsh-accent"
                :class="`bi bi-${service.icon}`"
                style="width: 56px; height: 56px"
              ></i>
            </div>
            <div class="card-body">
              <h6 class="fw-bold">{{ service.title }}</h6>
              <p class="fw-light text-secondary">{{ service.description }}</p>
            </div>
            <div class="card-footer bg-white border-top-0">
              <button
                class="btn btn-outline-bsh-primary rounded-circle d-flex align-items-center justify-content-center p-0"
                style="height: 40px; width: 40px"
              >
                <i class="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="bg-light py-5 px-md-5 px-3">
      <div class="row g-4">
        <div class="col-md-6 position-relative">
          <img
            src="../assets/home-bsh.jpg"
            class="w-100 h-100 rounded-4 object-fit-cover"
            alt=""
          />

          <!-- Top left card -->
          <div class="position-absolute top-0 start-0 m-3">
            <div
              class="card border-light-subtle rounded-4 bg-white shadow-sm p-2"
              style="width: 270px"
            >
              <div class="d-flex align-items-center">
                <i class="bi bi-headset text-primary fs-3 me-2"></i>
                <div>
                  <h6 class="mb-0 fw-bold" style="font-size: smaller">24/7</h6>
                  <span class="text-muted" style="font-size: x-small"
                    >We are available when you want
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom left card -->
          <div class="position-absolute bottom-0 end-0 m-3">
            <div
              class="card border-light-subtle bg-white shadow-sm rounded-4 p-2"
              style="width: 300px"
            >
              <div class="d-flex align-items-start">
                <i class="bi bi-patch-check text-success fs-3 me-2"></i>
                <div>
                  <h6 class="mb-0 fw-bold" style="font-size: smaller">
                    15 Years of experience
                  </h6>
                  <small class="text-muted" style="font-size: x-small">
                    We have been serving the community with excellence and
                    compassion for over 15 years
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h6
            class="text-uppercase border-bsh-accent border-start border-3 ps-3 mb-3"
          >
            About us
          </h6>
          <h4 class="mb-4 fw-bold">
            We provide finnest patient's Care & Amenities
          </h4>

          <p class="text-black-50 mb-3">
            BSH is a leading healthcare provider in the UK. We are committed to
            providing the best healthcare services to our patients. We have a
            team of highly qualified professionals who are dedicated to
            providing the best care possible.
          </p>

          <div class="row mb-4">
            <div class="col-md-6">
              <ul class="list-unstyled">
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Seamless Care</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Patient-Centered Care</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Warm and Welcoming Environment</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Personalized Approach</span>
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list-unstyled">
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Comprehensive Care</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Cutting-Edge Technology</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Expert Doctors</span>
                </li>
                <li class="mb-2">
                  <i class="bi bi-check-square-fill text-bsh-accent me-2"></i>
                  <span>Positive Reviews</span>
                </li>
              </ul>
            </div>
          </div>

          <button
            class="btn bg-bsh-primary btn-sm d-flex align-items-center rounded-3 px-3"
          >
            More About Us
            <i
              class="bi bi-arrow-up-short fs-4 d-inline-block mb-0"
              style="transform: rotate(45deg)"
            ></i>
          </button>
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="py-5 px-md-5 px-3">
      <h6 class="text-uppercase border-bsh-accent border-start border-3 ps-2">
        Out Doctor Team
      </h6>

      <div class="d-flex justify-content-between align-items-end mb-5">
        <h2 class="fw-bold mb-0">Meet out expert doctors</h2>
        <span class="text-muted d-flex align-items-center">
          <small> View Full Team </small>
          <i
            class="bi bi-arrow-up-short fs-4 d-inline-block mb-0 text-bsh-accent"
            style="transform: rotate(45deg)"
          ></i
        ></span>
      </div>

      <div class="row row-cols-1 row-cols-md-4 g-4">
        <div class="col" v-for="doctor in doctors" :key="doctor.id">
          <div
            class="card rounded-5 rounded-bottom-0 border-0 h-100 bg-light border-bottom border-bsh-primary border-5"
          >
            <img
              :src="doctor.image"
              :alt="doctor.name"
              class="card-img-top object-fit-cover rounded-top-5"
              style="object-position: 80% 10%"
              height="200"
            />
            <div class="card-body">
              <h6 class="card-title fw-bold">{{ doctor.name }}</h6>
              <p class="card-text text-body-tertiary small">
                {{ doctor.specialty }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Help Line -->
    <section class="py-5 px-md-5 px-3">
      <div class="row g-4">
        <div class="col-md-6 d-flex align-items-center">
          <div>
            <h6 class="text-uppercase border-bsh-accent border-start border-3 ps-2">
              Emergency Help Line
            </h6>
            <h2 class="fw-bold mb-4">24/7 Help Line for assitance</h2>
            <p class="text-body-tertiary">
              BSH is committed to providing 24/7 emergency help to our patients.
              Our 24/7 help line is available to assist you with any questions
              or concerns you may have.
            </p>
            <div class="row g-4">
              <div class="col-md-6">
                <div class="card rounded-4 border-light-subtle px-4 py-2">
                  <div class="d-flex align-items-center">
                    <i class="bi bi-telephone me-3 fs-4 text-bsh-accent"></i>
                    <div class="d-grid small">
                      <span class="fw-bold">Phone Number</span>
                      <span class="text-body-tertiary">+234 123 4567</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card rounded-4 border-light-subtle px-4 py-2">
                  <div class="d-flex align-items-center">
                    <i class="bi bi-envelope-at me-3 fs-4 text-bsh-accent"></i>
                    <div class="d-grid small">
                      <span class="fw-bold">Email Address</span>
                      <span class="text-body-tertiary text-break">
                        info@basespecialisthospital.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="position-relative" style="height: 400px; width: 400px">
            <img
              src="../assets/home-bsh2.jpg"
              alt=""
              class="rounded-5 object-fit-cover"
              height="400"
              width="400"
            />

            <div class="position-absolute top-0 end-0 m-3">
              <div
                class="card border-light-subtle rounded-4 bg-white shadow-sm p-2"
                style="width: 240px"
              >
                <div class="d-flex align-items-center">
                  <i class="bi bi-calendar2-check fs-4 me-2 text-primary"></i>
                  <div>
                    <h6 class="mb-0 fw-bold" style="font-size: smaller">
                      Appointment
                    </h6>
                    <small class="text-muted" style="font-size: x-small">
                      Book Appointment anytime any where
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial -->
    <section class="bg-light py-5 px-md-5 px-3">
      <h6 class="text-uppercase border-bsh-accent border-start border-3 ps-2">Testimonial</h6>
      <h2 class="fw-bold mb-5">Hear what our patients say</h2>

      <div
        ref="testimonialsContainer"
        class="d-flex gap-4 overflow-auto testimonials-scroll mb-4"
        style="scroll-behavior: smooth"
      >
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="card border-light-subtle flex-shrink-0"
          style="min-width: 400px; max-width: 400px"
        >
          <div class="card-body pb-0">
            <p class="card-text">
              <i class="bi bi-quote fs-3 text-body-tertiary"></i>
              <span>{{ testimonial.text }}</span>
              <i
                class="bi bi-quote fs-3 text-body-tertiary"
                style="transform: rotate(180deg); float: right"
              ></i>
            </p>
          </div>
          <div class="card-footer bg-white border-top-0">
            <div class="d-flex align-items-center">
              <img
                :src="testimonial.avatar"
                :alt="testimonial.name"
                class="rounded-circle me-2 object-fit-cover"
                style="width: 40px; height: 40px"
              />
              <div>
                <h6 class="mb-0 fw-bold">{{ testimonial.name }}</h6>
                <div class="text-warning">
                  <i
                    v-for="star in renderStars(testimonial.rating)"
                    :key="star"
                    class="bi"
                    :class="star"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex gap-2 justify-content-center">
        <button
          @click="scrollTestimonials('left')"
          class="btn btn-outline-bsh-accent rounded-circle d-flex align-items-center justify-content-center p-0"
          style="height: 40px; width: 40px"
        >
          <i class="bi bi-arrow-left-short fs-3"></i>
        </button>
        <button
          @click="scrollTestimonials('right')"
          class="btn btn-outline-bsh-accent rounded-circle d-flex align-items-center justify-content-center p-0"
          style="height: 40px; width: 40px"
        >
          <i class="bi bi-arrow-right-short fs-3"></i>
        </button>
      </div>
    </section>

    <!-- BLOGS -->
    <section class="py-5 px-md-5 px-3">
      <h6 class="text-uppercase border-bsh-accent border-start border-3 ps-2">
        Blogs & Articles
      </h6>
      <div class="d-flex justify-content-between mb-5">
        <h2 class="fw-bold mb-0">Read top articles from expert doctors</h2>
        <span class="text-muted small d-flex align-items-center">
          View More
          <i
            class="bi bi-arrow-up-short text-bsh-accent h3 d-inline-block mb-0"
            style="transform: rotate(45deg)"
          ></i>
        </span>
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
            <div class="card-footer border-top-0 bg-white rounded-bottom-4">
              <p class="text-body-secondary d-flex align-items-center">
                <small> Read More </small>
                <i
                  class="bi bi-arrow-up-short h3 d-inline-block mb-0 text-bsh-accent"
                  style="transform: rotate(45deg)"
                ></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.rotate-icon {
  display: inline-block;
  transform: rotate(45deg);
}

.testimonials-scroll {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.testimonials-scroll::-webkit-scrollbar {
  display: none; /* WebKit */
}
</style>
