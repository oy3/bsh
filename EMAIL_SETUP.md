# Email Service Setup Guide

## EmailJS Setup Instructions

### 1. Create EmailJS Account
1. Go to [https://emailjs.com](https://emailjs.com)
2. Sign up for a free account
3. You get 200 emails/month for free

### 2. Add Email Service (Zoho Mail)
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Other (SMTP)" instead of Gmail
4. Configure with your Zoho Mail settings:
   - **Service ID**: Choose a name (e.g., "zoho_mail")
   - **SMTP Server**: smtp.zoho.com
   - **Port**: 587
   - **Security**: TLS
   - **Username**: info@basespecialisthospital.com
   - **Password**: Your Zoho Mail password (or app-specific password)
   - **From Name**: Base Specialist Hospital
   - **From Email**: info@basespecialisthospital.com

### 2.1. Important Zoho Mail Settings
Before configuring EmailJS, ensure these settings in your Zoho Mail:

1. **Enable IMAP/POP access**:
   - Go to Zoho Mail Settings → Mail Accounts → IMAP Access
   - Enable IMAP access

2. **Create App-Specific Password**:
   - Go to Zoho Account Security → App Passwords
   - Generate a new app password for "EmailJS"
   - Use this password instead of your regular password

3. **Verify Domain Authentication**:
   - Ensure your domain is properly verified in Zoho
   - Check SPF/DKIM records are set up

### 3. Create Email Templates

#### Contact Form Template
1. Go to "Email Templates" → "Create New Template"
2. Template ID: `contact_form`
3. Template content:
```html
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Phone: {{phone}}
Department: {{department}}
Urgency: {{urgency}}

Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

#### Appointment Template
1. Create another template with ID: `appointment_booking`
2. Template content:
```html
Subject: New Appointment Request - {{service}}

From: {{from_name}} ({{from_email}})
Service: {{service}}
Preferred Date: {{preferred_date}}

Additional Message:
{{message}}

---
Reply to: {{reply_to}}
```

### 4. Get Your Keys
1. Go to "Account" → "General"
2. Copy your **Public Key**
3. Copy **Service ID** from your service
4. Copy **Template IDs** from your templates

### 5. Update Configuration
In `/src/services/emailService.js`, replace these values:
```javascript
const EMAIL_CONFIG = {
  serviceId: 'your_service_id_here',
  contactTemplateId: 'contact_form',
  appointmentTemplateId: 'appointment_booking',
  publicKey: 'your_public_key_here',
};
```

### 6. Test the Integration
1. Fill out the contact form on your website
2. Check if email arrives at info@basespecialisthospital.com
3. Check EmailJS dashboard for logs

## Alternative Options

### 1. Formspree (Alternative Frontend Solution)
- Free tier: 50 submissions/month
- Easy setup with HTML forms
- Paid plans for more features

### 2. Netlify Forms (If deploying to Netlify)
- Free tier: 100 submissions/month
- Built-in spam protection
- Works automatically with Netlify hosting

### 3. Backend API Solution
If you prefer a backend solution:
- Create a simple Node.js/Express API
- Use nodemailer with SMTP
- Deploy to DigitalOcean
- More control but requires backend maintenance

## Recommendation
Start with EmailJS as it's:
- ✅ Frontend-only (no backend needed)
- ✅ Free tier suitable for small websites
- ✅ Easy integration with Vue.js
- ✅ Works with Zoho Mail
- ✅ Can be deployed anywhere (even static hosting)

## Troubleshooting Common Errors

### Error 412: "Sender is not allowed to relay emails"
This means Zoho Mail is blocking EmailJS from sending emails. Fix:

1. **Check SMTP Settings**:
   - Use "Other (SMTP)" service type, not Gmail
   - Server: smtp.zoho.com
   - Port: 587
   - Security: TLS

2. **Enable App-Specific Password**:
   - Go to Zoho Account → Security → App Passwords
   - Create password for EmailJS
   - Use this in EmailJS configuration

3. **Enable IMAP Access**:
   - Zoho Mail Settings → IMAP Access → Enable

4. **Verify Domain**:
   - Ensure basespecialisthospital.com is verified in Zoho
   - Check DNS records (SPF, DKIM)

### Error 401: Authentication Failed
- Double-check username and password
- Use app-specific password instead of regular password
- Ensure 2FA is not blocking access

### Alternative: Use Gmail SMTP
If Zoho continues to have issues, temporarily use Gmail:
1. Create a Gmail account for your hospital
2. Enable "Less secure app access" or use App Password
3. Configure EmailJS with Gmail SMTP settings

## Quick Start Steps
1. Sign up at emailjs.com
2. Add Zoho Mail service
3. Create the two email templates
4. Copy your keys to emailService.js
5. Test your forms!