import SparkleIcon from '@/assets/icons/react-components-icon/SparkleIcon';
import type { ComponentType, SVGProps } from 'react';
import devWorkingStatsSection from '@/assets/images/dev/devWorkingStatsSection.webp';
import client from '@/assets/images/client.webp';
import project from '@/assets/images/portfolio/portfolio1.webp';
import type { SectionHeader } from '@/types/sectionHeader';

export interface StatItem {
  id: string;
  value: string;
  label: string;
  image: string;
  imageAlt: string;
}

export interface StatsSectionData {
  header: SectionHeader;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  stats: StatItem[];
}

export const statsSectionData: StatsSectionData = {
  header: {
    title: 'Proven Numbers. Real Impact.',
    subtitle: 'From shipped products to years of experience',
  },
  icon: SparkleIcon,
  stats: [
    {
      id: 'experience',
      value: '2+',
      label: 'Years Experience',
      image: devWorkingStatsSection,
      imageAlt: 'Edwin working on laptop',
    },
    {
      id: 'satisfaction',
      value: '99%',
      label: 'Client Satisfaction',
      image: client,
      imageAlt: 'Satisfied client',
    },
    {
      id: 'projects',
      value: '12+',
      label: 'Project Delivered',
      image: project,
      imageAlt: 'Delivered projects portfolio preview',
    },
  ],
};
