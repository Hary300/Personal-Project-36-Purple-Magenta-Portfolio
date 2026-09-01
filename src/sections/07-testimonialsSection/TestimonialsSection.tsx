import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialsSectionData } from '@/data/testimonialsSectionData';

const TestimonialsSection = () => {
  const header = testimonialsSectionData.header;
  return (
    <SectionWrapper sectionId='testimonial'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default TestimonialsSection;
