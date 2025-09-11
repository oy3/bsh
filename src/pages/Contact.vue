<script>
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        service: ''
      },
      services: [
        'Web Development',
        'Mobile Apps',
        'Cloud Solutions',
        'Data Analytics',
        'AI & Machine Learning',
        'Consulting',
        'Other'
      ],
      contactInfo: {
        address: '123 Business Street, Tech City, TC 12345',
        phone: '(555) 123-4567',
        email: 'info@bsh.com',
        hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
      },
      isSubmitting: false,
      submitMessage: ''
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      this.submitMessage = ''
      
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting = false
        this.submitMessage = 'Thank you for your message! We\'ll get back to you within 24 hours.'
        this.resetForm()
      }, 2000)
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        service: ''
      }
    },
    validateForm() {
      return this.form.name && this.form.email && this.form.message
    }
  }
}
</script>

<template>
  <div class="contact">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>Contact Us</h1>
        <p>Get in touch with our team to discuss your project or ask any questions</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <h2>Send us a Message</h2>
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name" 
                    required 
                    placeholder="Your full name"
                  >
                </div>
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email" 
                    required 
                    placeholder="your.email@example.com"
                  >
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="company">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    v-model="form.company" 
                    placeholder="Your company name"
                  >
                </div>
                <div class="form-group">
                  <label for="service">Service Interested In</label>
                  <select id="service" v-model="form.service">
                    <option value="">Select a service</option>
                    <option v-for="service in services" :key="service" :value="service">
                      {{ service }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject" 
                  placeholder="Brief subject of your inquiry"
                >
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea 
                  id="message" 
                  v-model="form.message" 
                  required 
                  rows="6" 
                  placeholder="Tell us about your project or question..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="btn btn-primary" 
                :disabled="!validateForm() || isSubmitting"
              >
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
              </button>

              <div v-if="submitMessage" class="submit-message">
                {{ submitMessage }}
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="contact-info-section">
            <h2>Get in Touch</h2>
            <div class="contact-info">
              <div class="info-item">
                <div class="info-icon">📍</div>
                <div class="info-content">
                  <h3>Address</h3>
                  <p>{{ contactInfo.address }}</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">📞</div>
                <div class="info-content">
                  <h3>Phone</h3>
                  <p>{{ contactInfo.phone }}</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">✉️</div>
                <div class="info-content">
                  <h3>Email</h3>
                  <p>{{ contactInfo.email }}</p>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">🕒</div>
                <div class="info-content">
                  <h3>Business Hours</h3>
                  <p>{{ contactInfo.hours }}</p>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="quick-actions">
              <h3>Quick Actions</h3>
              <div class="action-buttons">
                <a href="tel:(555)123-4567" class="btn btn-outline">Call Now</a>
                <a href="mailto:info@bsh.com" class="btn btn-outline">Send Email</a>
              </div>
            </div>

            <!-- FAQ -->
            <div class="faq-section">
              <h3>Quick FAQ</h3>
              <div class="faq-item">
                <h4>What's your typical response time?</h4>
                <p>We respond to all inquiries within 24 hours during business days.</p>
              </div>
              <div class="faq-item">
                <h4>Do you offer free consultations?</h4>
                <p>Yes! We offer a free 30-minute consultation to discuss your project needs.</p>
              </div>
              <div class="faq-item">
                <h4>What information should I include in my message?</h4>
                <p>Please include your project goals, timeline, and any specific requirements you have.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section (Placeholder) -->
    <section class="map-section">
      <div class="container">
        <h2>Find Us</h2>
        <div class="map-placeholder">
          <div class="map-content">
            <h3>📍 Our Location</h3>
            <p>{{ contactInfo.address }}</p>
            <p>We're located in the heart of Tech City, easily accessible by public transportation.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact {
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, #42b883 0%, #369870 100%);
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

.contact-content {
  padding: 4rem 1rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
}

.contact-form-section h2,
.contact-info-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.contact-form {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 600;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e9ecef;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #42b883;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.btn {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #42b883;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #369870;
  transform: translateY(-2px);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-outline {
  background-color: transparent;
  color: #42b883;
  border: 2px solid #42b883;
}

.btn-outline:hover {
  background-color: #42b883;
  color: white;
}

.submit-message {
  margin-top: 1rem;
  padding: 1rem;
  background-color: #d4edda;
  color: #155724;
  border-radius: 5px;
  border: 1px solid #c3e6cb;
}

.contact-info {
  margin-bottom: 3rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.info-icon {
  font-size: 2rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.info-content h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.info-content p {
  color: #6c757d;
  margin: 0;
}

.quick-actions {
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 10px;
}

.quick-actions h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.action-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.faq-section {
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.faq-section h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.faq-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.faq-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.faq-item h4 {
  color: #42b883;
  margin-bottom: 0.5rem;
}

.faq-item p {
  color: #6c757d;
  line-height: 1.6;
  margin: 0;
}

.map-section {
  background-color: #f8f9fa;
  padding: 4rem 1rem;
}

.map-section h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.map-placeholder {
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  overflow: hidden;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-content {
  text-align: center;
  padding: 2rem;
}

.map-content h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.map-content p {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .action-buttons {
    flex-direction: column;
  }
}
</style>
