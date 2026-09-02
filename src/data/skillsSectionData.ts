import html from '@/assets/icons/tech/html.png';
import css from '@/assets/icons/tech/css.png';
import js from '@/assets/icons/tech/javascript.png';
import sequalizer from '@/assets/icons/tech/sequalize.png';
import ts from '@/assets/icons/tech/typescript.png';
import mongodb from '@/assets/icons/tech/mongodb.png';
import type { SectionHeader } from '@/types/sectionHeader';
import PurpleMagentaBackground from '@/assets/images/background/purpleMagentaBackground.png';

export interface SkillItem {
  id: string;
  name: string;
  icon: string;
}

export interface QuoteCard {
  bgImage: string;
  quote: string;
  author: string;
  ctaButton: {
    label: string;
    href: string;
  };
}

export interface SkillsSectionData {
  header: SectionHeader;
  skills: SkillItem[];
  quoteCard: QuoteCard;
}

export const skillsSectionData: SkillsSectionData = {
  header: {
    title: 'Experienced in Web & App Development',
    subtitle:
      'I create user-focused websites that look good, work well, and feel right.',
  },
  skills: [
    { id: 'html', name: 'HTML', icon: html },
    { id: 'css', name: 'CSS', icon: css },
    { id: 'javascript', name: 'Javascript', icon: js },
    { id: 'typescript', name: 'Typescript', icon: ts },
    { id: 'sequelize', name: 'Sequelize', icon: sequalizer },
    { id: 'mongodb', name: 'Mongo DB', icon: mongodb },
  ],
  quoteCard: {
    bgImage: PurpleMagentaBackground,
    quote:
      'Programming is the art of telling another human what you want the computer to do.',
    author: 'Donald Knuth',
    ctaButton: {
      label: "Let's Build Something",
      href: '#contact',
    },
  },
};
