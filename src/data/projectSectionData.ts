import portfolio1 from '@/assets/images/portfolio/portfolio1.webp';
import portfolio2 from '@/assets/images/portfolio/portfolio2.webp';
import portfolio3 from '@/assets/images/portfolio/portfolio3.webp';
import type { SectionHeader } from '@/types/sectionHeader';

export interface ProjectItem {
  id: string;
  title: string;
  year: string;
  image: string;
  imageAlt: string;
  demoUrl: string;
}

export interface ProjectsSectionData {
  header: SectionHeader;
  projects: ProjectItem[];
}

export const projectsSectionData: ProjectsSectionData = {
  header: {
    title: 'Frontend in Action',
    subtitle:
      'These are hands-on projects where I delivered clean, responsive user interfaces.',
  },
  projects: [
    {
      id: 'portfolio-1',
      title: 'Portofolio 1',
      year: '2025',
      image: portfolio1,
      imageAlt: 'Preview of Willy Nielsen Portfolio website',
      demoUrl: '#',
    },
    {
      id: 'portfolio-2',
      title: 'Portofolio 2',
      year: '2025',
      image: portfolio2,
      imageAlt: 'Preview of Dark Neon Interactive Web Experience project',
      demoUrl: '#',
    },
    {
      id: 'portfolio-3',
      title: 'Portofolio 3',
      year: '2025',
      image: portfolio3,
      imageAlt: 'Preview of Delon Lorenzo Portfolio website',
      demoUrl: '#',
    },
  ],
};
