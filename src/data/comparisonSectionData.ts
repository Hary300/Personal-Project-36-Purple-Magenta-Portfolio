import SparkleIcon from '@/assets/icons/react-components-icon/SparkleIcon';
import type { SectionHeader } from '@/types/sectionHeader';
import type { ComponentType, SVGProps } from 'react';
import { RxCross2 } from 'react-icons/rx';

export interface ComparisonFeature {
  id: string;
  text: string;
}

export interface ComparisonColumn {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>> | string;
  isHighlighted: boolean;
  features: ComparisonFeature[];
}

export interface ComparisonSectionData {
  header: SectionHeader;
  columns: {
    withMe: ComparisonColumn;
    other: ComparisonColumn;
  };
}

export const comparisonSectionData: ComparisonSectionData = {
  header: {
    title: 'Choose Wisely, Get Quality Results',
    subtitle:
      'Make the right choice for interfaces that are fast, reliable, and visually sharp.',
  },
  columns: {
    withMe: {
      title: 'With Me',
      icon: SparkleIcon,
      isHighlighted: true,
      features: [
        { id: 'react', text: 'React Expert' },
        { id: 'pixel', text: 'Pixel Perfect' },
        { id: 'typescript', text: 'TypeScript Proficiency' },
        { id: 'clean-code', text: 'Clean, Maintainable Code' },
        { id: 'performance', text: 'Performance Optimization' },
        { id: 'responsive', text: 'Responsive Website' },
        { id: 'ui-design', text: 'UI Design Proficiency (Figma)' },
      ],
    },
    other: {
      title: 'Other',
      icon: RxCross2,
      isHighlighted: false,
      features: [
        { id: 'react', text: 'React Expert' },
        { id: 'pixel', text: 'Pixel Perfect' },
        { id: 'typescript', text: 'TypeScript Proficiency' },
        { id: 'clean-code', text: 'Clean, Maintainable Code' },
        { id: 'performance', text: 'Performance Optimization' },
        { id: 'responsive', text: 'Responsive Website' },
        { id: 'ui-design', text: 'UI Design Proficiency (Figma)' },
      ],
    },
  },
};
