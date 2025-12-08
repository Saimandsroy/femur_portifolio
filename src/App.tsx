import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyUs from './components/WhyUs';
import TechStack from './components/TechStack';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased selection:bg-indigo-500/30">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Navigation */}
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Projects Section */}
        <Projects />

        {/* Why Partner With Us */}
        <WhyUs />

        {/* Tech Stack */}
        <TechStack />

        {/* CTA Section */}
        <CTA />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
