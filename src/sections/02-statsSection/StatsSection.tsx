import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { statsSectionData } from '@/data/statsSectionData';

const StatsSection = () => {
  const header = statsSectionData.header;
  return (
    <SectionWrapper sectionId='stats'>
      <SectionTitle
        title={header.title}
        subtitle={header.subtitle}
        className='text-left'
      />
    </SectionWrapper>
  );
};

export default StatsSection;
