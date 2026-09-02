import type { SectionHeader } from '@/types/sectionHeader';

export interface FAQItem {
  value: string;
  trigger: string;
  content: string;
}

export interface FAQSectionData {
  header: SectionHeader;
  faqs: FAQItem[];
}

export const faqSectionData: FAQSectionData = {
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Got questions? Here are the answers to the ones we get asked the most.',
  },
  faqs: [
    {
      value: 'technologies',
      trigger: 'What technologies do you work with?',
      content:
        'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
    },
    {
      value: 'freelance-remote',
      trigger: 'Do you work on freelance or remote projects?',
      content:
        'Yes, I am open to freelance work, contract projects, and full remote collaboration across different time zones.',
    },
    {
      value: 'figma-to-code',
      trigger: 'Can you convert Figma or Sketch designs into code?',
      content:
        'Absolutely. I specialize in turning Figma and Sketch mockups into clean, responsive, and pixel-perfect frontend code.',
    },
    {
      value: 'backend-collaboration',
      trigger: 'Do you collaborate with backend developers or teams?',
      content:
        'Yes, I regularly collaborate with backend engineers to integrate RESTful APIs and GraphQL services seamlessly.',
    },
    {
      value: 'full-time',
      trigger: 'Are you available for full-time roles?',
      content:
        'Yes, I am currently open to full-time frontend engineering opportunities.',
    },
  ],
};
