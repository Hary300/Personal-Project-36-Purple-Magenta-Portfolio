import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
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
      <Header />
      <HeroSection />
      <StatsSection />
      <SkillsSection />
      <ComparisonSection />
      <ExperienceSection />
      <ProjectSection />
      <TestimonialsSection />
      <FaqSection />
      <div className='relative max-w-360 mx-auto'>
        <ContactSection />
        <Footer />
        <div className='absolute h-[90%] w-[90%] right-0 bottom-0 bg-linear-to-tl from-[#6A27A0]/50 to-transparent -z-1 from-0% to-60%'></div>
      </div>
    </>
  );
}

export default App;
