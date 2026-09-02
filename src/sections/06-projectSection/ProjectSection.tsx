import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { Button } from '@/components/ui/button';
import { projectsSectionData } from '@/data/projectSectionData';
import { FaArrowRight } from 'react-icons/fa';

const ProjectSection = () => {
  const header = projectsSectionData.header;
  const projects = projectsSectionData.projects;
  return (
    <SectionWrapper sectionId='projects' hasGap>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <div className='flex flex-wrap gap-5'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='md:flex-1 flex flex-col gap-4 lg:gap-6'
          >
            <div className='rounded-md overflow-hidden'>
              <img src={project.image} alt={project.imageAlt} />
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex flex-col gap-1'>
                <p className='font-bold text-xl lg:text-display-sm'>
                  {project.title}
                </p>
                <p className='text-neutral-400 text-sm lg:text-md'>
                  {project.year}
                </p>
              </div>
              <Button
                variant='outline'
                className='rounded-full size-10 flex justify-center items-center shrink-0'
              >
                <FaArrowRight />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectSection;
