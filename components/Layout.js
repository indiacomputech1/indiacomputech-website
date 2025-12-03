import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Globe } from 'lucide-react'

export default function Layout({ children, title, description }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    const siteTitle = title ? `${title} | India CompuTech` : 'India CompuTech - Your Technology Partners'
    const siteDescription = description || 'Leading provider of IT infrastructure, cloud solutions, security, and automation services. Strong systems. Strong outcomes.'

    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content={siteDescription} />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

                {/* Open Graph */}
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={siteDescription} />
                <meta property="og:site_name" content="India CompuTech" />

                {/* Additional SEO */}
                <meta name="robots" content="index, follow" />
                <meta name="author" content="India CompuTech" />
                <link rel="canonical" href="https://indiacomputech.com" />
            </Head>

            <div className="min-h-screen bg-white flex flex-col">
                {/* Header */}
                <header
                    className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-white border-b border-gray-200'
                        }`}
                >
                    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">
                            {/* Logo */}
                            <Link href="/" className="flex items-center space-x-3 group">
                                <div className="relative w-48 h-12 transition-transform group-hover:scale-105">
                                    <Image
                                        src="/logo.png"
                                        alt="India CompuTech Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center space-x-8">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative group"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}
                                <Link
                                    href="/contact"
                                    className="btn-primary"
                                >
                                    Get Started
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>

                        {/* Mobile Navigation */}
                        {mobileMenuOpen && (
                            <div className="md:hidden py-4 space-y-2 animate-fade-in">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/contact"
                                    className="block py-3 px-4 text-primary font-semibold hover:bg-gray-50 rounded-lg transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        )}
                    </nav>
                </header>

                {/* Main Content */}
                <main className="flex-grow">{children}</main>

                {/* Footer */}
                <footer className="bg-secondary text-gray-300">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                            {/* Company Info */}
                            <div className="col-span-1 md:col-span-2">
                                <div className="relative w-48 h-12 mb-4">
                                    <Image
                                        src="/logo-white.png"
                                        alt="India CompuTech Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-gray-400 mb-4 max-w-md">
                                    Your Technology Partners. Building strong systems for strongeer outcomes.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61582348047508"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <Facebook size={20} />
                                    </a>
                                    <a
                                        href="https://instagram.com/india_computech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="hover:text-primary transition-colors"
                                        aria-label="Website"
                                    >
                                        <Globe size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/services" className="hover:text-primary transition-colors">
                                            Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="hover:text-primary transition-colors">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="hover:text-primary transition-colors">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy" className="hover:text-primary transition-colors">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h4 className="font-semibold text-white mb-4">Contact Us</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2">
                                        <Phone size={16} className="flex-shrink-0" />
                                        <a href="tel:+918779497922" className="hover:text-primary transition-colors">
                                            +91 87794 97922
                                        </a>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Mail size={16} className="flex-shrink-0 mt-1" />
                                        <a
                                            href="mailto:indiacomputech1@gmail.com"
                                            className="hover:text-primary transition-colors text-sm break-all"
                                        >
                                            indiacomputech1@gmail.com
                                        </a>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <MapPin size={16} className="flex-shrink-0 mt-1" />
                                        <span className="text-sm">Mahim West, Mumbai, Maharashtra, IN</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className="border-t border-gray-700 pt-8 text-center">
                            <p className="text-gray-500 text-sm">
                                &copy; {new Date().getFullYear()} India CompuTech. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
