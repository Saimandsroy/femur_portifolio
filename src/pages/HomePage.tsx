import { useState, useEffect, useRef, useCallback } from 'react';
import { NavigationProvider } from '../context/NavigationContext';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import NavigationDots from '../components/NavigationDots';
import CinematicSection from '../components/CinematicSection';
import AnimatedContent from '../components/AnimatedContent';

export default function HomePage() {
    const [currentSection, setCurrentSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [direction, setDirection] = useState(1);
    const touchStart = useRef(0);

    const totalSections = 7;

    const changeSection = useCallback((newSection: number) => {
        if (newSection === currentSection) return;
        const newDirection = newSection > currentSection ? 1 : -1;
        setDirection(newDirection);
        setIsScrolling(true);
        setCurrentSection(newSection);
        setTimeout(() => setIsScrolling(false), 1200);
    }, [currentSection]);

    const handleWheel = useCallback((e: WheelEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (isScrolling) return;
        if (Math.abs(e.deltaY) > 10) {
            const scrollDir = e.deltaY > 0 ? 1 : -1;
            const nextSection = currentSection + scrollDir;
            if (nextSection >= 0 && nextSection < totalSections) {
                changeSection(nextSection);
            }
        }
    }, [currentSection, isScrolling, totalSections, changeSection]);

    useEffect(() => {
        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, [handleWheel]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isScrolling) return;
            let next = -1;
            if (e.key === 'ArrowDown' || e.key === ' ') next = currentSection + 1;
            if (e.key === 'ArrowUp') next = currentSection - 1;
            if (e.key === 'Home') next = 0;
            if (e.key === 'End') next = totalSections - 1;
            if (next !== -1 && next >= 0 && next < totalSections && next !== currentSection) {
                e.preventDefault();
                changeSection(next);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentSection, isScrolling, totalSections, changeSection]);

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            touchStart.current = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
        };
        const handleTouchEnd = (e: TouchEvent) => {
            if (isScrolling) return;
            const touchEnd = e.changedTouches[0].clientY;
            const diff = touchStart.current - touchEnd;
            if (Math.abs(diff) > 50) {
                const scrollDir = diff > 0 ? 1 : -1;
                const next = currentSection + scrollDir;
                if (next >= 0 && next < totalSections) {
                    changeSection(next);
                }
            }
        };
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd, { passive: false });
        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [currentSection, isScrolling, totalSections, changeSection]);

    const components = [
        <Hero />,
        <Services />,
        <Projects />,
        <WhyUs />,
        <Testimonials />,
        <CTA />,
        <Footer />
    ];

    return (
        <NavigationProvider value={changeSection}>
            <NavigationDots
                totalSections={totalSections}
                currentSection={currentSection}
                onDotClick={(i) => {
                    if (!isScrolling && i !== currentSection) {
                        changeSection(i);
                    }
                }}
            />

            <main className="relative z-10 w-full h-full">
                {/* Scroll Hint */}
                <div
                    className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-opacity duration-500 ${currentSection === 0 ? 'opacity-100' : 'opacity-0'}`}
                >
                    <div className="animate-bounce text-white/50 text-sm">Scroll to explore</div>
                </div>

                {components.map((Component, index) => {
                    const isActive = index === currentSection;
                    const isScrolledPast = index < currentSection;
                    const isFuture = index > currentSection;

                    return (
                        <CinematicSection
                            key={index}
                            isActive={isActive}
                            isPrevious={isScrolledPast}
                            isNext={isFuture}
                            direction={direction}
                            zIndex={isActive ? 10 : 0}
                        >
                            <AnimatedContent isActive={isActive}>
                                {Component}
                            </AnimatedContent>
                        </CinematicSection>
                    );
                })}
            </main>
        </NavigationProvider>
    );
}
