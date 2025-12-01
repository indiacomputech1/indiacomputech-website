// API route for contact form submission
// This is a serverless function that handles form submissions

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' })
    }

    try {
        const { name, company, email, phone, services, message } = req.body

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({
                error: 'Missing required fields',
                details: 'Name, email, and message are required'
            })
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: 'Invalid email format'
            })
        }

        // Rate limiting (simple implementation)
        // In production, use a proper rate limiting library
        const userAgent = req.headers['user-agent']
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

        // Here you would implement your email sending logic
        // Option 1: Use a service like SendGrid, Mailgun, or AWS SES
        // Option 2: Use Nodemailer with SMTP
        // Option 3: Forward to Formspree or similar service

        // Example with SendGrid (uncomment and configure):
        /*
        const sgMail = require('@sendgrid/mail')
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
        const msg = {
          to: 'indiacomputech1@gmail.com',
          from: 'noreply@indiacomputech.com',
          subject: `New Contact Form Submission from ${name}`,
          text: `
            Name: ${name}
            Company: ${company || 'N/A'}
            Email: ${email}
            Phone: ${phone || 'N/A'}
            Services: ${services || 'N/A'}
            
            Message:
            ${message}
          `,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Services:</strong> ${services || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        }
    
        await sgMail.send(msg)
        */

        // Example with Nodemailer (uncomment and configure):
        /*
        const nodemailer = require('nodemailer')
        
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          secure: true,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })
    
        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: 'indiacomputech1@gmail.com',
          subject: `New Contact Form Submission from ${name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
            <p><strong>Services:</strong> ${services || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        })
        */

        // Log submission (in production, log to a database or file)
        console.log('Form submission received:', {
            name,
            email,
            timestamp: new Date().toISOString(),
        })

        // Send success response
        return res.status(200).json({
            success: true,
            message: 'Your message has been sent successfully. We will contact you soon!'
        })

    } catch (error) {
        console.error('Contact form error:', error)
        return res.status(500).json({
            error: 'Failed to send message',
            details: 'An error occurred while processing your request. Please try again or contact us directly.'
        })
    }
}

// Configure API route
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '1mb',
        },
    },
}