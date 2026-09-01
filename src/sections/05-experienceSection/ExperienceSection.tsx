import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { experienceSectionData } from '@/data/experienceSectionData';

const ExperienceSection = () => {
  const header = experienceSectionData.header;
  return (
    <SectionWrapper sectionId='experience'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default ExperienceSection;
