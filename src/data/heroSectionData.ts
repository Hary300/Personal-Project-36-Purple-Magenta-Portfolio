import devCloseUp from '@/assets/images/dev/devCloseUp.webp';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';
import type { IconType } from 'react-icons/lib';

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconType;
}

export interface AboutSection {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  description: string;
}

export interface HeroSectionData {
  profileImage: string;
  about: AboutSection;
  socialLinks: SocialLink[];
}

export const heroSectionData: HeroSectionData = {
  profileImage: devCloseUp,
  about: {
    name: 'HARY300',
    firstName: 'HARY',
    lastName: '300',
    title: 'About me',
    description:
      'Passionate about frontend development, I focus on crafting digital products.',
  },
  socialLinks: [
    {
      platform: 'facebook',
      url: 'https://facebook.com',
      icon: FaFacebookF,
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com',
      icon: FaInstagram,
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com',
      icon: FaLinkedinIn,
    },
    {
      platform: 'tiktok',
      url: 'https://tiktok.com',
      icon: FaTiktok,
    },
  ],
};
