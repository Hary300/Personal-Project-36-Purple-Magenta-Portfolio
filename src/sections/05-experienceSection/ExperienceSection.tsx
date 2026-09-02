import SectionWrapper from '@/components/layouts/SectionWrapper';
import PurpleSparkle from '@/components/shared/PurpleSparkle';
import SectionTitle from '@/components/shared/SectionTitle';
import { experienceSectionData } from '@/data/experienceSectionData';
import { cn } from '@/lib/utils';

const ExperienceSection = () => {
  const header = experienceSectionData.header;
  const experiences = experienceSectionData.experiences;
  return (
    <SectionWrapper sectionId='experience' hasGap>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <div className='relative'>
        <div className='absolute left-0 inset-y-0  w-6 lg:w-8 shrink-0 -z-1'>
          <div className='absolute left-1/2 -translate-x-1/2 inset-y-0 w-px bg-neutral-900' />
        </div>
        <div className='flex flex-col gap-4'>
          {experiences.map((experience, index) => {
            const responsibilities = experience.responsibilities;
            return (
              <div
                key={experience.id}
                className='grid grid-cols-[auto_1fr] gap-3 lg:gap-6'
              >
                <div className='relative'>
                  <div className='relative z-2 rounded-full size-6 lg:size-8 shrink-0 bg-[#8E36A0] flex justify-center items-center'>
                    <div className='size-[14.4px] shrink-0 rounded-full bg-primary-100' />
                  </div>
                  {index === experiences.length - 1 && (
                    <div className='absolute bottom-0 bg-black inset-x-0 h-[calc(100%-1rem)] z-1' />
                  )}
                </div>

                <div
                  className={cn(
                    'overflow-hidden relative rounded-2xl border border-neutral-800 p-4 lg:p-6 flex flex-col gap-4 lg:grid lg:grid-cols-[0.25fr_1fr] lg:gap-6 divide-y lg:divide-y-0 lg:divide-x'
                  )}
                >
                  {index === 0 && (
                    <div className='absolute inset-0 bg-radial-[100%_70%_at_5%_0%] from-[#34144C] to-transparent -z-1 from-0% to-70%' />
                  )}
                  <div className='flex flex-col gap-2 pb-4 lg:pb-0 lg:pr-6'>
                    <p className='text-neutral-25 font-bold text-md lg:text-lg '>
                      {experience.period}
                    </p>
                    <div>
                      <img
                        src={experience.companyLogo}
                        alt={`${experience.companyName} logo`}
                      />
                    </div>
                  </div>

                  <div className='flex flex-col gap-4'>
                    {responsibilities.map((responsibility, index) => (
                      <div key={index} className='flex gap-2'>
                        <PurpleSparkle />
                        <p className='text-neutral-25 text-sm gl:text-md'>
                          {responsibility}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
