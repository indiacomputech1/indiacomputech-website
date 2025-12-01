import '@/styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
    const router = useRouter()

    useEffect(() => {
        // Track page views (you can integrate Google Analytics here)
        const handleRouteChange = (url) => {
            // gtag('config', 'GA_MEASUREMENT_ID', {
            //   page_path: url,
            // })
        }

        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const elements = document.querySelectorAll('.animate-on-scroll')
        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return <Component {...pageProps} />
}