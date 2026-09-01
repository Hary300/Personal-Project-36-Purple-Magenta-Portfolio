import Footer from '@/components/layouts/Footer';
import HeroSection from '@/sections/01-heroSection';
import StatsSection from '@/sections/02-statsSection';
import SkillsSection from '@/sections/03-skillsSection';
import ComparisonSection from '@/sections/04-comparisonSection';
import ExperienceSection from '@/sections/05-experienceSection';
import ProjectSection from '@/sections/06-projectSection';
import TestimonialsSection from '@/sections/07-testimonialsSection';
import FaqSection from '@/sections/08-faqSection';
import ContactSection from '@/sections/09-contactSection';

function App() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SkillsSection />
      <ComparisonSection />
      <ExperienceSection />
      <ProjectSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
