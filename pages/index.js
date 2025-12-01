import Layout from '@/components/Layout'
import Link from 'next/link'
import {
    Server,
    Cloud,
    Shield,
    Zap,
    Users,
    TrendingUp,
    Check,
    ArrowRight,
    ChevronRight,
    Award,
    Clock,
    Target,
} from 'lucide-react'

export default function Home() {
    const services = [
        {
            icon: Server,
            title: 'Infrastructure Design & Optimization',
            description: 'Build robust, scalable IT infrastructure tailored to your business needs with enterprise-grade reliability.',
            link: '/services#infrastructure',
        },
        {
            icon: Cloud,
            title: 'Cloud Migrations & Governance',
            description: 'Seamless cloud adoption with comprehensive security, compliance, and cost optimization strategies.',
            link: '/services#cloud',
        },
        {
            icon: Users,
            title: 'Managed IT Operations',
            description: 'Comprehensive IT management and 24/7 support services that keep your systems running smoothly.',
            link: '/services#managed',
        },
        {
            icon: Shield,
            title: 'Security Baselining',
            description: 'Strengthen your security posture with proven frameworks, risk assessments, and compliance solutions.',
            link: '/services#security',
        },
        {
            icon: Zap,
            title: 'Automation & AI Workflows',
            description: 'Streamline operations with intelligent automation that reduces manual work and increases efficiency.',
            link: '/services#automation',
        },
        {
            icon: TrendingUp,
            title: 'Digital Transformation',
            description: 'AI-driven solutions for modern business growth, from web development to digital marketing.',
            link: '/services#digital',
        },
    ]

    const deliverySteps = [
        {
            number: '01',
            title: 'Assess',
            description: 'Review systems, network, cloud, endpoints, and risks. Map issues and quick wins.',
        },
        {
            number: '02',
            title: 'Plan',
            description: 'Set priorities. Document architecture. Prepare runbooks and rollout steps.',
        },
        {
            number: '03',
            title: 'Deploy',
            description: 'Execute changes in controlled phases. Strengthen configurations and monitoring.',
        },
        {
            number: '04',
            title: 'Support',
            description: 'Provide steady operations. Track incidents and trends. Review performance monthly.',
        },
        {
            number: '05',
            title: 'Improve',
            description: 'Optimise based on data. Automate workflows. Strengthen processes and resilience.',
        },
    ]

    const outcomes = [
        { icon: Shield, title: 'Lower Operational Risk', description: 'Reduce vulnerabilities and strengthen security' },
        { icon: Clock, title: 'Better Uptime', description: 'Maximize system availability and reliability' },
        { icon: Target, title: 'Fewer Escalations', description: 'Proactive monitoring prevents issues' },
        { icon: Award, title: 'Stronger Security', description: 'Enterprise-grade protection and compliance' },
        { icon: TrendingUp, title: 'Higher Productivity', description: 'Streamlined operations and automation' },
    ]

    const stats = [
        { value: '500+', label: 'Projects Delivered' },
        { value: '98%', label: 'Client Satisfaction' },
        { value: '24/7', label: 'Support Available' },
        { value: '15+', label: 'Years Experience' },
    ]

    return (
        <Layout
            title="Home"
            description="India CompuTech - Your Technology Partners. Leading provider of IT infrastructure, cloud solutions, security, and automation services."
        >
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-50 via-white to-red-50 py-20 md:py-28 overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            India CompuTech
                        </h1>
                        <p className="text-2xl md:text-4xl font-bold mb-6">
                            <span className="text-gradient">Strong systems. Strong outcomes.</span>
                        </p>
                        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                            Infrastructure, Cloud, Security, and Automation services that strengthen daily operations and improve productivity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn-primary inline-flex items-center justify-center group">
                                Book an Assessment Call
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/services" className="btn-secondary inline-flex items-center justify-center">
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center animate-on-scroll">
                        <h2 className="section-heading">About India CompuTech</h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            India CompuTech helps businesses build stable, secure, and efficient IT environments. We reduce operational noise and prepare teams for modernisation with structured engineering and automation. Leaders choose us for clarity, predictable execution, and measurable progress.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-on-scroll">
                        <h2 className="section-heading">Our Services</h2>
                        <p className="section-subheading">
                            Comprehensive IT solutions designed for modern businesses
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="card group hover:border-primary hover:border-2 transition-all animate-on-scroll"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className="bg-red-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                                    <service.icon className="text-primary group-hover:text-white transition-colors" size={28} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all group"
                                >
                                    Learn More
                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/services" className="btn-primary inline-flex items-center group">
                            View All Services
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Delivery Framework Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-on-scroll">
                        <h2 className="section-heading">Delivery Framework</h2>
                        <p className="section-subheading">
                            Structured approach to IT excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {deliverySteps.map((step, idx) => (
                            <div key={idx} className="relative animate-on-scroll" style={{ animationDelay: `${idx * 100}ms` }}>
                                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl h-full border-2 border-red-100 hover:border-primary transition-colors">
                                    <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4 shadow-lg">
                                        {step.number}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                                {idx < deliverySteps.length - 1 && (
                                    <ChevronRight className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary z-10" size={24} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Outcomes Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-red-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Measurable Outcomes</h2>
                        <p className="text-xl text-red-100 max-w-3xl mx-auto">
                            Results that matter to your business
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {outcomes.map((outcome, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-center hover:bg-white/20 transition-all border border-white/20 animate-on-scroll"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <outcome.icon className="mx-auto mb-4 text-red-100" size={40} />
                                <h3 className="font-bold mb-2 text-lg">{outcome.title}</h3>
                                <p className="text-sm text-red-100">{outcome.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-on-scroll">
                        Ready to Strengthen Your IT Operations?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-on-scroll">
                        Let's discuss how we can help you build stable, secure, and efficient systems.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
                        <Link href="/contact" className="bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center group">
                            Schedule a Consultation
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="tel:+918779497922" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center">
                            Call: +91 87794 97922
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}