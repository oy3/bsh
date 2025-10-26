import emailjs from "@emailjs/browser";

// EmailJS configuration
const EMAIL_CONFIG = {
    serviceId: "zoho_mail", // You'll get this from EmailJS dashboard
    contactTemplateId: "template_hlf2snc", // Template for contact form
    appointmentTemplateId: "template_ubzbq3o", // Template for appointments
    publicKey: "kHQqaeTgUDJIIdMRp", // Your EmailJS public key
};

// Initialize EmailJS
emailjs.init(EMAIL_CONFIG.publicKey);

export const emailService = {
    // Send contact form email
    async sendContactEmail(formData) {
        try {
            const templateParams = {
                from_name: "Base Specialist Hospital",
                from_email: "info@basespecialistshospital.com",
                user_name: `${formData.firstName} ${formData.lastName}`,
                user_email: formData.email,
                phone: formData.phone,
                department: formData.department,
                subject: formData.subject,
                message: formData.message,
                urgency: formData.urgency,
                to_email: "info@basespecialistshospital.com",
                reply_to: formData.email,
            };

            const response = await emailjs.send(
                EMAIL_CONFIG.serviceId,
                EMAIL_CONFIG.contactTemplateId,
                templateParams
            );

            return {
                success: true,
                message: "Email sent successfully!",
                response,
            };
        } catch (error) {
            console.error("Email sending failed:", error);
            return {
                success: false,
                message: "Failed to send email. Please try again.",
                error,
            };
        }
    },

    // Send appointment booking email
    async sendAppointmentEmail(formData) {
        try {
            const templateParams = {
                from_name: "Base Specialist Hospital",
                from_email: "info@basespecialistshospital.com",
                user_name: formData.fullName,
                user_email: formData.email,
                service: formData.service,
                preferred_date: formData.preferredDate,
                message: formData.message || "No additional message",
                to_email: "info@basespecialistshospital.com",
                reply_to: formData.email,
            };

            const response = await emailjs.send(
                EMAIL_CONFIG.serviceId,
                EMAIL_CONFIG.appointmentTemplateId,
                templateParams
            );

            return {
                success: true,
                message: "Appointment request sent successfully!",
                response,
            };
        } catch (error) {
            console.error("Appointment email sending failed:", error);
            return {
                success: false,
                message: "Failed to send appointment request. Please try again.",
                error,
            };
        }
    },
};

export default emailService;
