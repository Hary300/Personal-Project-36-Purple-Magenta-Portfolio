import type { SectionHeader } from '@/types/sectionHeader';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
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
      id: 'technologies',
      question: 'What technologies do you work with?',
      answer:
        'I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.',
    },
    {
      id: 'freelance-remote',
      question: 'Do you work on freelance or remote projects?',
      answer:
        'Yes, I am open to freelance work, contract projects, and full remote collaboration across different time zones.',
    },
    {
      id: 'figma-to-code',
      question: 'Can you convert Figma or Sketch designs into code?',
      answer:
        'Absolutely. I specialize in turning Figma and Sketch mockups into clean, responsive, and pixel-perfect frontend code.',
    },
    {
      id: 'backend-collaboration',
      question: 'Do you collaborate with backend developers or teams?',
      answer:
        'Yes, I regularly collaborate with backend engineers to integrate RESTful APIs and GraphQL services seamlessly.',
    },
    {
      id: 'full-time',
      question: 'Are you available for full-time roles?',
      answer:
        'Yes, I am currently open to full-time frontend engineering opportunities.',
    },
  ],
};
