import trustPilot from '@/assets/images/company/trustpilot.svg';
import airbnb from '@/assets/images/company/airbnb.svg';
import google from '@/assets/images/company/google.svg';
import type { SectionHeader } from '@/types/sectionHeader';

export interface ExperienceItem {
  id: string;
  period: string;
  companyName: string;
  companyLogo: string;
  responsibilities: string[];
}

export interface ExperienceSectionData {
  header: SectionHeader;
  experiences: ExperienceItem[];
}

export const experienceSectionData: ExperienceSectionData = {
  header: {
    title: 'Years of Building, Learning, and Shipping',
    subtitle:
      'Each role has sharpened my ability to build better digital experiences, faster.',
  },
  experiences: [
    {
      id: 'airbnb',
      period: '2025 - Present',
      companyName: 'Airbnb',
      companyLogo: airbnb,
      responsibilities: [
        'Develop responsive and user-friendly web interfaces using modern frontend technologies.',
        'Collaborate with UI/UX designers to turn design mockups into functional components.',
        'Optimize web applications for maximum speed and scalability.',
        'Ensure cross-browser and cross-platform compatibility.',
        'Implement reusable code and component libraries for future use.',
      ],
    },
    {
      id: 'trustpilot',
      period: '2025 - Present',
      companyName: 'Trustpilot',
      companyLogo: trustPilot,
      responsibilities: [
        'Develop responsive and user-friendly web interfaces using modern frontend technologies.',
        'Collaborate with UI/UX designers to turn design mockups into functional components.',
        'Optimize web applications for maximum speed and scalability.',
        'Ensure cross-browser and cross-platform compatibility.',
        'Implement reusable code and component libraries for future use.',
      ],
    },
    {
      id: 'google',
      period: '2025 - Present',
      companyName: 'Google',
      companyLogo: google,
      responsibilities: [
        'Develop responsive and user-friendly web interfaces using modern frontend technologies.',
        'Collaborate with UI/UX designers to turn design mockups into functional components.',
        'Optimize web applications for maximum speed and scalability.',
        'Ensure cross-browser and cross-platform compatibility.',
        'Implement reusable code and component libraries for future use.',
      ],
    },
  ],
};
