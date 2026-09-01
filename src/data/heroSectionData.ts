import devCloseUp from '@/assets/images/dev/devCloseUp.webp';

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface AboutSection {
  title: string;
  description: string;
}

export interface HeroSectionData {
  name: string;
  firstName: string;
  lastName: string;
  profileImage: string;
  badgeText: string;
  about: AboutSection;
  socialLinks: SocialLink[];
}

export const heroSectionData: HeroSectionData = {
  name: 'HARY300',
  firstName: 'HARY',
  lastName: '300',
  profileImage: devCloseUp,
  badgeText: 'Expert for Frontend Developer',
  about: {
    title: 'About me',
    description:
      'Passionate about frontend development, I focus on crafting digital products.',
  },
  socialLinks: [
    {
      platform: 'facebook',
      url: 'https://facebook.com',
      icon: 'Facebook',
    },
    {
      platform: 'instagram',
      url: 'https://instagram.com',
      icon: 'Instagram',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com',
      icon: 'Linkedin',
    },
    {
      platform: 'tiktok',
      url: 'https://tiktok.com',
      icon: 'Tiktok',
    },
  ],
};
