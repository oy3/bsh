<script>
export default {
  name: 'About',
  data() {
    return {
      company: {
        name: 'BSH',
        founded: '2020',
        employees: '50+',
        projects: '200+'
      },
      team: [
        {
          id: 1,
          name: 'John Smith',
          position: 'CEO & Founder',
          image: '👨‍💼'
        },
        {
          id: 2,
          name: 'Sarah Johnson',
          position: 'CTO',
          image: '👩‍💻'
        },
        {
          id: 3,
          name: 'Mike Wilson',
          position: 'Lead Developer',
          image: '👨‍💻'
        }
      ],
      values: [
        {
          id: 1,
          title: 'Innovation',
          description: 'We constantly push the boundaries of what\'s possible'
        },
        {
          id: 2,
          title: 'Integrity',
          description: 'We build trust through transparency and honesty'
        },
        {
          id: 3,
          title: 'Excellence',
          description: 'We strive for perfection in everything we do'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="about">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>About BSH</h1>
        <p>Learn more about our company, mission, and the team behind our success</p>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="company-overview">
      <div class="container">
        <div class="overview-content">
          <div class="overview-text">
            <h2>Our Story</h2>
            <p>
              Founded in {{ company.founded }}, BSH has been at the forefront of technological innovation, 
              providing cutting-edge solutions to businesses worldwide. Our journey began with a simple 
              mission: to bridge the gap between complex technology and practical business needs.
            </p>
            <p>
              Today, we're proud to work with over {{ company.projects }} successful projects under our belt 
              and a growing team of {{ company.employees }} dedicated professionals who share our passion 
              for excellence and innovation.
            </p>
          </div>
          <div class="overview-stats">
            <div class="stat">
              <h3>{{ company.founded }}</h3>
              <p>Founded</p>
            </div>
            <div class="stat">
              <h3>{{ company.employees }}</h3>
              <p>Team Members</p>
            </div>
            <div class="stat">
              <h3>{{ company.projects }}</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values -->
    <section class="mission-values">
      <div class="container">
        <h2 class="section-title">Our Mission & Values</h2>
        <div class="mission-content">
          <div class="mission">
            <h3>Our Mission</h3>
            <p>
              To empower businesses with innovative technology solutions that drive growth, 
              efficiency, and success in the digital age. We believe in creating lasting 
              partnerships with our clients and delivering value that extends far beyond 
              project completion.
            </p>
          </div>
          <div class="values">
            <h3>Our Values</h3>
            <div class="values-grid">
              <div v-for="value in values" :key="value.id" class="value-item">
                <h4>{{ value.title }}</h4>
                <p>{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team">
      <div class="container">
        <h2 class="section-title">Meet Our Team</h2>
        <div class="team-grid">
          <div v-for="member in team" :key="member.id" class="team-member">
            <div class="member-avatar">{{ member.image }}</div>
            <h3>{{ member.name }}</h3>
            <p>{{ member.position }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <h2>Ready to Work Together?</h2>
        <p>Let's discuss how we can help your business succeed</p>
        <router-link to="/contact" class="btn btn-primary">Get In Touch</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
}

.page-header {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
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

.company-overview {
  padding: 4rem 1rem;
}

.overview-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.overview-text h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.overview-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: #555;
}

.overview-stats {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stat {
  text-align: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
}

.stat h3 {
  font-size: 2rem;
  color: #42b883;
  margin-bottom: 0.5rem;
}

.stat p {
  color: #6c757d;
  font-weight: 600;
}

.mission-values {
  background-color: #f8f9fa;
  padding: 4rem 1rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #2c3e50;
}

.mission-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.mission h3,
.values h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #2c3e50;
}

.mission p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555;
}

.values-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.value-item h4 {
  color: #42b883;
  margin-bottom: 0.5rem;
}

.value-item p {
  color: #555;
  line-height: 1.6;
}

.team {
  padding: 4rem 1rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.team-member {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
}

.member-avatar {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.team-member h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.team-member p {
  color: #42b883;
  font-weight: 600;
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

@media (max-width: 768px) {
  .overview-content,
  .mission-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .overview-stats {
    flex-direction: row;
    justify-content: space-around;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
}
</style>
