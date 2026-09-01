import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqSectionData } from '@/data/faqSectionData';

const FaqSection = () => {
  const header = faqSectionData.header;
  return (
    <SectionWrapper sectionId='faq'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default FaqSection;
