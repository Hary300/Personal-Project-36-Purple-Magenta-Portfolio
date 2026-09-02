import SectionWrapper from '@/components/layouts/SectionWrapper';
import PurpleSparkle from '@/components/shared/PurpleSparkle';
import SectionTitle from '@/components/shared/SectionTitle';
import { statsSectionData } from '@/data/statsSectionData';

const StatsSection = () => {
  const header = statsSectionData.header;
  const stats = statsSectionData.stats;

  return (
    <SectionWrapper sectionId='about' hasGap>
      <SectionTitle
        title={header.title}
        subtitle={header.subtitle}
        className='text-left'
      />
      <div className='flex flex-col gap-4 lg:gap-6 divide-y'>
        {stats.map((stat) => (
          <div
            key={stat.id}
            className='grid grid-cols-[0.8fr_1fr_auto] items-center pb-4 lg:pb-6 gap-2'
          >
            <div className='flex  items-center'>
              <PurpleSparkle />
              <span className='font-bold text-[clamp(28px,calc(10.43vw-5.38px),40px)] lg:text-[80px]'>
                {stat.value}
              </span>
            </div>
            <p className='font-medium text-md lg:text-display-md max-w-30 lg:max-w-60'>
              {stat.label}
            </p>
            <div className='max-w-20 lg:max-w-30 rounded-md lg:rounded-2xl overflow-hidden'>
              <img src={stat.image} alt={stat.imageAlt} />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default StatsSection;
