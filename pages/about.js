import Layout from '@/components/Layout'
import Link from 'next/link'
import { Target, Eye, Award, Users, TrendingUp, Shield, ArrowRight } from 'lucide-react'

export default function About() {
    const values = [
        {
            icon: Shield,
            title: 'Integrity',
            description: 'We build trust through transparency and honest communication',
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We deliver high-quality solutions that exceed expectations',
        },
        {
            icon: Users,
            title: 'Partnership',
            description: 'We work as collaborators in your success and growth',
        },
        {
            icon: TrendingUp,
            title: 'Innovation',
            description: 'We stay ahead with cutting-edge technology and practices',
        },
    ]

    const team = [
        { name: 'Ahmed Patel', role: 'IT Head' },
        { name: 'Shoeb Shaikh', role: 'Senior IT Manager' },
        { name: 'Tushar Sawant', role: 'IT Administrator' },
        { name: 'Shreyal Dhume', role: 'Digital Solutions Expert' },
        { name: 'Asma Shaikh', role: 'Marketing Manager' },
        { name: 'Rehan Ansari', role: 'Hardware & Networking Expert' },
        { name: 'Vyankatesh Bakale', role: 'Director of Photography' },
        { name: 'Shayan Shaikh', role: 'Web and App Development Expert' },
        { name: 'Roshan Lad', role: 'CCTV, IT Security and Access Control Specialist' },
        { name: 'Swapnil Angre', role: 'Senior Graphic Designer' },
        { name: 'Shailesh Gurav', role: 'Video Animation Specialist' },
    ]

    const strengths = [
        'Professionals with excellent technical skills and specialized certifications',
        'Proven work experience at recognized corporations',
        'Proactive management approach with team ownership',
        'Continuous training and professional development',
        'Staying at the forefront of industry trends and innovation',
    ]

    return (
        <Layout
            title="About Us"
            description="Learn about India CompuTech - Your Technology Partners. Our vision, mission, values, and the expert team delivering IT excellence."
        >
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary to-red-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">About India CompuTech</h1>
                    <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
                        Your Technology Partners - Building strong systems for strong outcomes
                    </p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="animate-on-scroll">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
                            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                                <p className="text-lg leading-relaxed">
                                    India CompuTech (ICT) is a leading provider of market intelligence and technology solutions, offering a comprehensive, one-stop platform for businesses across sectors. With deep expertise and actionable insights, ICT develops, maintains, and operates advanced E-commerce and logistics platforms that simplify trading, streamline operations, and enhance business efficiency.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    Expanding beyond digital marketplaces, ICT delivers full-spectrum IT support services, including IT infrastructure management, email administration, CCTV system setup and monitoring, and managed IT services, ensuring organizations can operate securely and efficiently in today's fast-paced digital landscape.
                                </p>
                                <p className="text-lg leading-relaxed">
                                    At the core of ICT's mission is the commitment to long-term partnerships, working with clients as collaborators in innovation and growth. By providing cost-effective, high-quality technology solutions coupled with exceptional support, ICT enables businesses to achieve operational excellence while fostering enduring relationships built on trust and performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <div className="animate-on-scroll">
                            <div className="bg-white p-8 rounded-2xl shadow-lg h-full border-t-4 border-primary">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-xl mb-6">
                                    <Eye className="text-primary" size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    To redefine the future of IT by providing world-class solutions and products that enable organizations of every industry to thrive in a digital world.
                                </p>
                            </div>
                        </div>

                        {/* Mission */}
                        <div className="animate-on-scroll" style={{ animationDelay: '200ms' }}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg h-full border-t-4 border-primary">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-xl mb-6">
                                    <Target className="text-primary" size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Our mission is to empower professionals and organizations to reach higher standards of performance through continuous learning and motivation. By delivering innovative, reliable, and cost-effective IT solutions, we help businesses build, automate, and secure their operations for a smarter, more connected future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Values</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, idx) => (
                            <div
                                key={idx}
                                className="card text-center hover:border-primary hover:border-2 animate-on-scroll"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-xl mb-4 mx-auto">
                                    <value.icon className="text-primary" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strengths */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-red-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Strengths</h2>
                        <p className="text-xl text-red-100 max-w-3xl mx-auto">
                            What sets us apart in the industry
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {strengths.map((strength, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 flex items-start gap-4 hover:bg-white/20 transition-all animate-on-scroll"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">
                                        {idx + 1}
                                    </div>
                                    <p className="text-lg text-white">{strength}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-on-scroll">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Team</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Expert professionals dedicated to your success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {team.map((member, idx) => (
                            <div
                                key={idx}
                                className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200 hover:border-primary transition-all animate-on-scroll"
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                                    {member.name.charAt(0)}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-primary font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready to Work Together?
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Let's discuss how our team can help strengthen your IT operations
                    </p>
                    <Link
                        href="/contact"
                        className="btn-primary inline-flex items-center group"
                    >
                        Get in Touch
                        <ArrowRight
                            size={20}
                            className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                </div>
            </section>
        </Layout>
    )
}