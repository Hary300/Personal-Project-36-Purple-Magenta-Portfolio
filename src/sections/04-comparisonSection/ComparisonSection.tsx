import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { comparisonSectionData } from '@/data/comparisonSectionData';
import { cn } from '@/lib/utils';

const ComparisonSection = () => {
  const header = comparisonSectionData.header;
  const columns = comparisonSectionData.columns;
  return (
    <SectionWrapper sectionId='comparison' hasGap>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <div className='flex flex-col gap-5 lg:justify-between lg:flex-row'>
        {columns.map((column) => {
          const Icon = column.icon;
          return (
            <div
              key={column.id}
              className={cn(
                'relative flex flex-1 flex-col gap-3 p-4 lg:gap-4 lg:p-6 border rounded-2xl overflow-hidden',
                column.id === 'other' && 'bg-black'
              )}
            >
              {column.id === 'withMe' && (
                <div className='absolute inset-0 -z-1'>
                  <img
                    src={column.bgImage}
                    alt='purple magenta background'
                    className='w-full h-full object-cover object-bottom'
                  />
                </div>
              )}
              <p className='font-semibold text-lg lg:text-display-xs'>
                {column.title}
              </p>
              <div className='flex flex-col gap-2'>
                {column.features.map((feature) => (
                  <div
                    key={feature.id}
                    className={cn(
                      'px-3 py-3 lg:px-4  flex items-center gap-2 rounded-md',
                      column.id === 'other'
                        ? 'bg-neutral-900'
                        : 'bg-black/20 backdrop-blur-xl'
                    )}
                  >
                    <Icon
                      className={cn(
                        'size-7.5',
                        column.id === 'other' && 'text-[#EE1D52]'
                      )}
                    />
                    <span className='text-neutral text-sm lg:text-md'>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default ComparisonSection;
