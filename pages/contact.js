import { useState } from 'react'
import Layout from '@/components/Layout'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        services: '',
        message: '',
    })
    const [errors, setErrors] = useState({})
    const [submitStatus, setSubmitStatus] = useState(null)

    const serviceOptions = [
        'Infrastructure Design & Optimization',
        'Cloud Migration & Governance',
        'Managed IT Operations',
        'Security Solutions',
        'Automation & AI Workflows',
        'Digital Transformation',
        'Professional Email Solutions',
        'Backup & Security',
        'Event Management',
        'Other',
    ]

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        // Clear error for this field
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        setSubmitStatus('sending')

        // In production, replace this with actual form submission
        // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

        setTimeout(() => {
            setSubmitStatus('success')
            setFormData({
                name: '',
                company: '',
                email: '',
                phone: '',
                services: '',
                message: '',
            })

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000)
        }, 1500)
    }

    return (
        <Layout
            title="Contact Us"
            description="Get in touch with India CompuTech. Call us at +91 87794 97922 or email indiacomputech1@gmail.com for IT solutions and support."
        >
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary to-red-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
                        Ready to strengthen your IT operations? Let's talk.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="animate-on-scroll">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                            {submitStatus === 'success' && (
                                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                                    <p className="font-semibold">Thank you for contacting us!</p>
                                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                                </div>
                            )}

                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`input-field ${errors.name ? 'input-error' : ''}`}
                                        placeholder="Your full name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="Your company name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`input-field ${errors.email ? 'input-error' : ''}`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="input-field"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="services" className="block text-sm font-medium text-gray-700 mb-2">
                                        Services Required
                                    </label>
                                    <select
                                        id="services"
                                        name="services"
                                        value={formData.services}
                                        onChange={handleChange}
                                        className="input-field"
                                    >
                                        <option value="">Select a service</option>
                                        {serviceOptions.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`input-field ${errors.message ? 'input-error' : ''}`}
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                    )}
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={submitStatus === 'sending'}
                                    className="w-full btn-primary inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {submitStatus === 'sending' ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={20} className="ml-2" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="animate-on-scroll" style={{ animationDelay: '200ms' }}>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>

                            <div className="space-y-8">
                                {/* Contact Details */}
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                                            <Phone className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Call or WhatsApp</h3>
                                            <a
                                                href="tel:+918779497922"
                                                className="text-gray-600 hover:text-primary transition-colors text-lg"
                                            >
                                                +91 87794 97922
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                                            <Mail className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                            <a
                                                href="mailto:indiacomputech1@gmail.com"
                                                className="text-gray-600 hover:text-primary transition-colors break-all"
                                            >
                                                indiacomputech1@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                                            <MapPin className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                                            <p className="text-gray-600">Mahim West, Mumbai, Maharashtra, IN</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                                            <Clock className="text-primary" size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                                            <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                                            <p className="text-gray-600">Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Info Card */}
                                <div className="bg-gradient-to-br from-primary to-red-700 text-white p-8 rounded-2xl">
                                    <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-200 mt-1">✓</span>
                                            <span>24/7 Technical Support</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-200 mt-1">✓</span>
                                            <span>Certified Professionals</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-200 mt-1">✓</span>
                                            <span>Cost-Effective Solutions</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-200 mt-1">✓</span>
                                            <span>Quick Response Time</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-200 mt-1">✓</span>
                                            <span>Proven Track Record</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Optional - placeholder) */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gray-200 rounded-2xl overflow-hidden" style={{ height: '400px' }}>
                        <div className="w-full h-full flex items-center justify-center text-gray-500">
                            <div className="text-center">
                                <MapPin size={48} className="mx-auto mb-4" />
                                <p className="text-lg font-semibold">Map Integration</p>
                                <p className="text-sm">Google Maps embed would go here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
