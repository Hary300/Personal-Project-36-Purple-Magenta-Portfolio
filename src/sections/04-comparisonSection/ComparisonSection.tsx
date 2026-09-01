import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { comparisonSectionData } from '@/data/comparisonSectionData';

const ComparisonSection = () => {
  const header = comparisonSectionData.header;
  return (
    <SectionWrapper sectionId='comparison'>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
    </SectionWrapper>
  );
};

export default ComparisonSection;
