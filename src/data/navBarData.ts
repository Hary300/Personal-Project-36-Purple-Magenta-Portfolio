import SparkleIcon from '@/assets/icons/react-components-icon/SparkleIcon';
import type { ComponentType, SVGProps } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface NavbarData {
  logo: {
    text: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
  };
  navItems: NavItem[];
  ctaButton: {
    label: string;
    href: string;
  };
}

export const navbarData: NavbarData = {
  logo: {
    text: 'Hary',
    icon: SparkleIcon,
  },
  navItems: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skill', href: '#skill' },
    { label: 'Projects', href: '#projects' },
    { label: 'FAQ', href: '#faq' },
  ],
  ctaButton: {
    label: 'Get in Touch',
    href: '#contact',
  },
};
