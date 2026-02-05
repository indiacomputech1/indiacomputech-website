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

    // Intersection Observer for scroll animations — re-run after route changes
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

        const observeElements = () => {
            const elements = document.querySelectorAll('.animate-on-scroll')
            elements.forEach((el) => {
                // reset so animations replay on navigation
                el.classList.remove('visible')
                observer.observe(el)
            })
        }

        // Observe elements on initial load
        observeElements()

        // Re-observe after client-side navigations
        const handleRouteComplete = () => {
            observer.disconnect()
            // small delay to allow new DOM to render
            setTimeout(observeElements, 50)
        }

        router.events.on('routeChangeComplete', handleRouteComplete)

        return () => {
            observer.disconnect()
            router.events.off('routeChangeComplete', handleRouteComplete)
        }
    }, [router.events])

    return <Component {...pageProps} />
}