import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { skillsSectionData } from '@/data/skillsSectionData';

const SkillsSection = () => {
  const header = skillsSectionData.header;
  return (
    <SectionWrapper sectionId='skill'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default SkillsSection;
