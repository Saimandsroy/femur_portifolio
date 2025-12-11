import { useState, useEffect, useRef, useCallback } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import NavigationDots from './components/NavigationDots';
import CinematicSection from './components/CinematicSection';
import AnimatedContent from './components/AnimatedContent';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  // Track scroll direction: 1 for down (next), -1 for up (prev)
  const [direction, setDirection] = useState(1);
  const touchStart = useRef(0);

  const totalSections = 7; // Hero, Services, Projects, WhyUs, Testimonials, CTA, Footer

  const changeSection = useCallback((newSection: number) => {
    if (newSection === currentSection) return;

    const newDirection = newSection > currentSection ? 1 : -1;
    setDirection(newDirection);
    setIsScrolling(true);
    setCurrentSection(newSection);
    setTimeout(() => setIsScrolling(false), 1200); // Slightly longer than transition for safety
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

  // Keyboard navigation
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

  // Touch Support
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
    <div
      className="antialiased selection:bg-indigo-500/30 bg-black h-screen w-screen overflow-hidden relative"
      style={{ perspective: '1000px' }} // Add 3D perspective
    >
      <ThreeBackground />
      <Navbar />

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
          // Determine relationship to current section
          // If currentSection is 2:
          // index 2 is ACTIVE
          // index 1 is PREVIOUS (scrolled past)
          // index 3 is NEXT (upcoming)

          // BUT, for the "Cinematic" animation spec:
          // "Exiting Section" depends on DIRECTION.
          // If we go 0 -> 1 (Down): 0 is Previous, 1 is Active.
          // If we go 1 -> 0 (Up): 1 is Previous, 0 is Active.

          // So logic is simpler: 
          // Is it the section we just left? Or the one we are going to?
          // Actually, we can just render ALL of them and let the CSS logic inside CinematicSection handle the "Previous/Next/Hidden" state based on index comparisons.

          const isActive = index === currentSection;
          // A section is "Previous" if it's the one we just left, OR any section "above" (scrolled past) if we are scrolling down?
          // The user wants: "Exiting Section" (the one disappearing).
          // So strictly speaking, only the *immediate* neighbor matters for the transition.
          // But we should keep others hidden safely.

          // Let's refine "isPrevious" and "isNext" to be index-based for simplicity, 
          // and let CinematicSection use 'direction' to decide the specific translate values.
          // const isPrevious = index === currentSection - direction; // The one we came FROM (roughly)
          // Wait, if direction is +1 (down), we came from index-1. 
          // If direction is -1 (up), we came from index+1. 
          // Correct.

          // Actually, standard logic:
          const isScrolledPast = index < currentSection;
          const isFuture = index > currentSection;

          // We pass broad state, let component decide specific transforms
          // We need to pass the GLOBAL scroll direction so the component knows which way "Up" is for the exit animation.

          // Optimization: Only render the current, previous, and next sections to DOM? 
          // No, React reflow might act weird. Render all, hide others.

          return (
            <CinematicSection
              key={index}
              isActive={isActive}
              isPrevious={isScrolledPast} // Treat all past sections as "Previous" state
              isNext={isFuture}       // Treat all future sections as "Next" state
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
    </div>
  );
}

export default App;
