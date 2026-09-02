import SectionWrapper from '@/components/layouts/SectionWrapper';
import CtaButton from '@/components/shared/CtaButton';
import SectionTitle from '@/components/shared/SectionTitle';
import { skillsSectionData } from '@/data/skillsSectionData';
import { cn } from '@/lib/utils';

const SkillsSection = () => {
  const header = skillsSectionData.header;
  const skills = skillsSectionData.skills;
  const quoteCard = skillsSectionData.quoteCard;
  return (
    <SectionWrapper sectionId='skill' hasGap>
      <SectionTitle title={header.title} subtitle={header.subtitle} />

      <div className='flex flex-col gap-4 md:flex-row md:justify-between'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full'>
          {skills.map((skill) => (
            <div
              key={skill.id}
              className='flex flex-col justify-center items-center border rounded-2xl h-43 lg:h-auto gap-4'
            >
              <div className='size-13'>
                <img
                  src={skill.icon}
                  alt={`${skill.name} icon`}
                  className={cn(
                    'w-full h-full object-contain',
                    skill.id === 'javascript' && 'scale-125'
                  )}
                />
              </div>
              <p className='text-md lg:text-lg'>{skill.name}</p>
            </div>
          ))}
        </div>

        <div className='relative flex flex-col justify-between gap-16.5 lg:gap-30.75 py-6 px-4 lg:px-6 overflow-hidden rounded-2xl lg:max-w-127.25'>
          <div className='absolute inset-0 -z-1 '>
            <img
              src={quoteCard.bgImage}
              alt='Background image'
              className='w-full h-full absolute top-0 -left-50 min-w-300'
            />
          </div>
          <div className='flex flex-col gap-3'>
            <p className='font-bold text-xl lg:text-display-md'>
              "{quoteCard.quote}""
            </p>
            <p className='text-md'>—{quoteCard.author}</p>
          </div>
          <CtaButton>Let's Build Something</CtaButton>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
