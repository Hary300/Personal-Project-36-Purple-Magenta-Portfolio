import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { projectsSectionData } from '@/data/projectSectionData';

const ProjectSection = () => {
  const header = projectsSectionData.header;
  return (
    <SectionWrapper sectionId='projects'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default ProjectSection;
