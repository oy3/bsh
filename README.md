# Base Specialist Hospital (BSH) - Healthcare Website

A modern, responsive healthcare website for Base Specialist Hospital built with Vue 3, Vite, and Bootstrap 5. The platform provides comprehensive information about hospital services, doctors, appointment booking, and patient contact management.

## 🌟 Features

### Core Features
- **Service Directory**: Browse comprehensive healthcare services with detailed descriptions and features
- **Doctor Directory**: View doctor profiles with specialties, education, and experience
- **Appointment Booking**: Schedule appointments directly through the website with email notifications
- **Contact Management**: Contact form with automatic email delivery to hospital inbox
- **Responsive Design**: Fully responsive design that works seamlessly on desktop, tablet, and mobile devices
- **Doctor Matching**: Related doctors displayed on service detail pages based on specialties

### Pages
- **Home**: Hero section, featured services, testimonials, team highlights, and call-to-action
- **About**: Hospital information, mission, vision, values, team overview, and FAQs
- **Services**: Main services grid with detailed service pages including features and related doctors
- **Doctors**: Doctor listing with filtering and individual doctor profile pages
- **Blog**: Blog listing and detailed blog post pages
- **Contact**: Contact form, business hours, emergency information, and FAQ

### Technical Features
- ✅ Vue 3 with Composition API
- ✅ Vue Router for seamless page navigation with hash scrolling support
- ✅ Bootstrap 5 for responsive design
- ✅ EmailJS integration for automated email notifications
- ✅ JSON-based data management (services, doctors, testimonials, blog posts)
- ✅ Navbar with mobile-responsive hamburger menu
- ✅ Dynamic form validation
- ✅ Loading states and success/error messaging

## 📁 Project Structure

```
bsh/
├── public/                    # Static assets
│   └── images/
│       └── doctors/          # Doctor images
├── src/
│   ├── assets/               # Vue component assets
│   ├── components/           # Reusable Vue components
│   │   ├── Navbar.vue
│   │   ├── Footer.vue
│   │   ├── DoctorCard.vue
│   │   ├── BlogSection.vue
│   │   ├── TeamSection.vue
│   │   ├── FAQSection.vue
│   │   └── ...
│   ├── data/                 # JSON data files
│   │   ├── services.json     # Services data
│   │   ├── doctors.json      # Doctors data
│   │   ├── hospital-info.json # Hospital contact & info
│   │   ├── testimonials.json # Patient testimonials
│   │   └── blog.json         # Blog posts
│   ├── pages/                # Page components
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Services.vue
│   │   ├── ServiceDetail.vue
│   │   ├── Doctors.vue
│   │   ├── DoctorDetail.vue
│   │   ├── Blog.vue
│   │   ├── BlogDetail.vue
│   │   ├── Contact.vue
│   │   └── ...
│   ├── services/             # Business logic
│   │   └── emailService.js   # EmailJS integration
│   ├── layouts/              # Layout components
│   │   └── MainLayout.vue
│   ├── router/               # Vue Router configuration
│   │   └── index.js
│   ├── App.vue               # Root component
│   ├── main.js               # Entry point
│   └── style.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd bsh
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up EmailJS (Optional - for contact/appointment emails)**
   - Sign up at [emailjs.com](https://emailjs.com)
   - Configure your email service (Zoho Mail or Gmail)
   - Create email templates
   - Update `src/services/emailService.js` with your keys:
   ```javascript
   const EMAIL_CONFIG = {
     serviceId: 'your_service_id',
     contactTemplateId: 'your_contact_template_id',
     appointmentTemplateId: 'your_appointment_template_id',
     publicKey: 'your_public_key',
   };
   ```

### Development

Start the development server with hot reload:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📧 Email Configuration

The website uses EmailJS for automated email notifications. Two types of emails are supported:

### Contact Form Emails
When a visitor fills the contact form, an email is sent to `info@basespecialistshospital.com` with:
- Visitor's name and email
- Phone number
- Department/Category
- Urgency level
- Message content
- Reply-to address for easy responses

### Appointment Booking Emails
When a visitor books an appointment, an email is sent with:
- Patient's name and email
- Selected service
- Preferred appointment date/time
- Additional message (optional)
- Reply-to address

**Note**: Appointment dates must be at least 24 hours from the current time.

### Setting Up EmailJS

Detailed instructions are available in the code comments within `src/services/emailService.js`. Quick setup:

1. Create account at emailjs.com
2. Add your email service (SMTP)
3. Create email templates with the provided template variables
4. Copy your service ID and public key
5. Update the configuration in emailService.js

## 🎨 Customization

### Colors & Branding
- Primary color: `--bsh-primary` (defined in CSS)
- Secondary color: `--bsh-secondary`
- Accent color: `--bsh-accent`
- Update these in your CSS files to rebrand

### Hospital Information
Edit `src/data/hospital-info.json` to update:
- Hospital name and contact details
- Phone numbers
- Email addresses
- Address and location
- Working hours
- Social media links

### Services
Add or modify services in `src/data/services.json`:
- Service title and description
- Icons and images
- Features and benefits

### Doctors
Update doctor information in `src/data/doctors.json`:
- Name, role, and specialties
- Education and experience
- Contact information
- Profile images

### Blog Posts
Manage blog content in `src/data/blog.json`:
- Title, slug, and content
- Author and date
- Featured image

## 🔄 Router Configuration

The application uses Vue Router with hash-based scrolling for smooth navigation to specific sections. Routes are configured in `src/router/index.js`:

- `/` - Home page
- `/about` - About page
- `/services` - Services listing
- `/services/:id` - Service detail page
- `/doctors` - Doctor listing
- `/doctors/:id` - Doctor detail page
- `/blog` - Blog listing
- `/blog/:slug` - Blog post page
- `/contact` - Contact page

### Hash Navigation
To link to specific sections on a page, use hash anchors:
```vue
<router-link to="/services#book-appt">Book Appointment</router-link>
```

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

Bootstrap 5 grid system is used for responsive layouts.

## 🔐 Security Notes

- **EmailJS Keys**: The public key is safe to use in frontend code
- **Form Validation**: Client-side validation prevents common issues
- **HTTPS**: Always use HTTPS in production
- **Email Templates**: Keep sensitive information out of email templates

## 🚀 Deployment

### Deploy to DigitalOcean (or any server)

1. **Build the project**
```bash
npm run build
```

2. **Upload the `dist/` folder** to your server using FileZilla or similar FTP client

3. **Configure your web server** (Apache/Nginx) to serve the `dist/` folder as the root

4. **Set up SSL certificate** for HTTPS (recommended)

### Deploy to Netlify (Recommended)

1. Push code to GitHub
2. Connect repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

## 📦 Dependencies

- **Vue 3**: Frontend framework
- **Vue Router**: Client-side routing
- **Bootstrap 5**: CSS framework
- **Vite**: Build tool
- **EmailJS**: Email service integration

## 🤝 Contributing

To contribute improvements:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions about the BSH website, please contact:
- **Email**: info@basespecialisthospital.com
- **Phone**: [Available in hospital-info.json]

## 🎯 Future Enhancements

- [ ] Patient portal with booking history
- [ ] Online prescription management
- [ ] Telemedicine integration
- [ ] Multi-language support
- [ ] Payment gateway integration
- [ ] Admin dashboard
- [ ] SMS notifications

---

**Last Updated**: December 2025
**Project**: Base Specialist Hospital Website
**Built with**: Vue 3 + Vite + Bootstrap 5
