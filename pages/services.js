import Layout from '@/components/Layout'
import Link from 'next/link'
import {
    Server,
    Cloud,
    Shield,
    Zap,
    Users,
    TrendingUp,
    Monitor,
    Database,
    Lock,
    Wifi,
    HardDrive,
    Mail,
    Camera,
    Globe,
    CheckCircle,
    ArrowRight,
} from 'lucide-react'

export default function Services() {
    const serviceCategories = [
        {
            id: 'infrastructure',
            icon: Server,
            title: 'Smart IT Infrastructure Solutions',
            tagline: 'Reliable. Scalable. Future-Ready.',
            description: 'Custom-built IT infrastructure services that ensure seamless connectivity, security, and performance at every level.',
            features: [
                'Desktop & Laptop Procurement (branded or custom-built)',
                'System Upgrades (RAM, storage, performance)',
                'Repairs & Maintenance',
                'Server & Firewall Solutions',
                'Networking & Connectivity (LAN, Wi-Fi)',
                'Peripheral Support (printers, scanners)',
            ],
            benefits: [
                'Reduced downtime',
                'Improved performance',
                'Scalable solutions',
                'Expert support',
            ],
        },
        {
            id: 'cloud',
            icon: Cloud,
            title: 'Cloud Computing Solutions',
            tagline: 'Secure. Scalable. Global.',
            description: 'Unlock the full potential of your business with cloud-based solutions designed for modern enterprises.',
            features: [
                'Virtual & Physical Private Servers',
                'Domain Name Registration & DNS Management',
                'Shared & Dedicated Email Services',
                'Shared & Dedicated Web Hosting',
                'Dedicated Servers & Colocation',
                'Backup & Disaster Recovery',
                'Hosted Storage Solutions',
            ],
            benefits: [
                'Global accessibility',
                'Cost optimization',
                'Enhanced security',
                'Business continuity',
            ],
        },
        {
            id: 'digital',
            icon: TrendingUp,
            title: 'AI Driven Digital Solutions',
            tagline: 'Intelligent. Impactful. Measurable.',
            description: 'Harness the power of AI-driven tools to elevate brand visibility and accelerate growth.',
            features: [
                'Web Design & Development',
                'Social Media Management',
                'AI-Driven Content Management',
                'CRM Solutions & Automation',
                'Online Reputation Management (ORM)',
                'Programmatic Advertising & Analytics',
            ],
            benefits: [
                'Increased visibility',
                'Quality lead generation',
                'Data-driven decisions',
                'Brand growth',
            ],
        },
        {
            id: 'email',
            icon: Mail,
            title: 'Professional Email Solutions',
            tagline: 'Secure. Professional. Scalable.',
            description: 'Custom email solutions that project professionalism and strengthen business communications.',
            features: [
                'Microsoft 365 Setup',
                'Google Workspace Integration',
                'cPanel Mail Configuration',
                'Dedicated Hosting (Cloud or On-Premise)',
                'Shared Hosting (Cloud Based)',
                'SmarterMail & Enterprise Platforms',
            ],
            benefits: [
                'Enhanced credibility',
                'Secure communication',
                'Team collaboration',
                'Data protection',
            ],
        },
        {
            id: 'security',
            icon: Shield,
            title: 'Backup & Security Solutions',
            tagline: 'Protect. Prevent. Perform.',
            description: 'Stay ahead of risks with proactive security and reliable backup solutions.',
            features: [
                'Dedicated & Shared Backup Systems',
                'On-Premise & Cloud Backups',
                'CCTV Installation & Upgrades',
                'Access Control & Door Systems',
                'Network & Email Security',
                'Device Protection (Desktops, Laptops, Servers)',
            ],
            benefits: [
                'Data protection',
                'Compliance ready',
                'Risk mitigation',
                'Business continuity',
            ],
        },
        {
            id: 'managed',
            icon: Users,
            title: 'Managed IT Services',
            tagline: 'Simplify. Streamline. Save.',
            description: 'Focus on your business while we handle your IT infrastructure with expert management.',
            features: [
                'Annual Maintenance Contracts (AMC)',
                'Complete Infrastructure Setup',
                'Manpower Outsourcing',
                'On-Call Support & Monitoring',
                'Networking & Wi-Fi Management',
                'Proactive Maintenance',
            ],
            benefits: [
                'Reduced IT costs',
                'Expert management',
                'Minimal downtime',
                'Focus on core business',
            ],
        },
    ]

    return (
        <Layout
            title="Services"
            description="Comprehensive IT services including infrastructure, cloud solutions, security, automation, and managed services. Explore our full range of technology solutions."
        >
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary to-red-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
                        Comprehensive IT solutions designed to strengthen your operations and drive business growth
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {serviceCategories.map((service, idx) => (
                            <div
                                key={service.id}
                                id={service.id}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Content */}
                                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-xl mb-6">
                                        <service.icon className="text-primary" size={32} />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                                        {service.title}
                                    </h2>
                                    <p className="text-xl text-primary font-semibold mb-4">{service.tagline}</p>
                                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                                        {service.benefits.map((benefit, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <CheckCircle className="text-primary flex-shrink-0" size={20} />
                                                <span className="text-gray-700 font-medium">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        href="/contact"
                                        className="btn-primary inline-flex items-center group"
                                    >
                                        Get Started
                                        <ArrowRight
                                            size={20}
                                            className="ml-2 group-hover:translate-x-1 transition-transform"
                                        />
                                    </Link>
                                </div>

                                {/* Features List */}
                                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                                        <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features</h3>
                                        <ul className="space-y-4">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
                        <p className="text-xl text-gray-600">More ways we can support your business</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card text-center">
                            <Camera className="text-primary mx-auto mb-4" size={40} />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Event Management</h3>
                            <p className="text-gray-600">
                                Professional videography, photography, and complete event coordination services
                            </p>
                        </div>

                        <div className="card text-center">
                            <Database className="text-primary mx-auto mb-4" size={40} />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce Platforms</h3>
                            <p className="text-gray-600">
                                Advanced marketplace and logistics platforms that simplify trading operations
                            </p>
                        </div>

                        <div className="card text-center">
                            <Monitor className="text-primary mx-auto mb-4" size={40} />
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Solutions</h3>
                            <p className="text-gray-600">
                                Tailored IT solutions designed specifically for your unique business requirements
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
                        Let's discuss which services are right for your business
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg inline-flex items-center justify-center group"
                        >
                            Request a Quote
                            <ArrowRight
                                size={20}
                                className="ml-2 group-hover:translate-x-1 transition-transform"
                            />
                        </Link>
                        <Link
                            href="tel:+918779497922"
                            className="bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-900 transition-all border-2 border-white inline-flex items-center justify-center"
                        >
                            Call: +91 87794 97922
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}