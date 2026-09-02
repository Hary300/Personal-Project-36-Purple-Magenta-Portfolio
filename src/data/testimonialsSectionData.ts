import AirbnbIcon from '@/assets/icons/react-components-icon/AirbnbIcon';
import GoogleIcon from '@/assets/icons/react-components-icon/GoogleIcon';
import SlackIcon from '@/assets/icons/react-components-icon/SlackIcon';
import SpotifyIcon from '@/assets/icons/react-components-icon/SpotifyIcon';
import TrustPilotIcon from '@/assets/icons/react-components-icon/TrustPilotIcon';
import type { SectionHeader } from '@/types/sectionHeader';
import type { ComponentType, SVGProps } from 'react';

export interface TestimonialItem {
  id: string;
  companyLogo: ComponentType<SVGProps<SVGSVGElement>>;
  companyName: string;
  rating: number;
  content: string;
  authorName: string;
  authorRole: string;
}

export interface TestimonialsSectionData {
  header: SectionHeader;
  testimonials: TestimonialItem[];
}

export const testimonialsSectionData: TestimonialsSectionData = {
  header: {
    title: 'Trusted by Teams, Valued by Clients',
    subtitle:
      'A few kind words from the people behind the projects Hary helped bring to life.',
  },
  testimonials: [
    {
      id: 'airbnb',
      companyLogo: AirbnbIcon,
      companyName: 'Airbnb',
      rating: 5,
      content:
        "Hary delivered clean and efficient code that made our app load faster and feel smoother. He's a pleasure to work with.",
      authorName: 'Sarah Liem',
      authorRole: 'Product Manager at Techlynk',
    },
    {
      id: 'google',
      companyLogo: GoogleIcon,
      companyName: 'Google',
      rating: 5,
      content:
        'Working with Hary was seamless. His eye for detail and mastery of pixel-perfect designs saved us weeks of development time.',
      authorName: 'Marcus Vance',
      authorRole: 'Lead Engineer at Coinbase',
    },
    {
      id: 'spotify',
      companyLogo: SpotifyIcon,
      companyName: 'Spotify',
      rating: 5,
      content:
        'Hary transformed our complex design mockups into fully interactive, responsive components with incredible speed and accuracy.',
      authorName: 'Elena Rostova',
      authorRole: 'Design System Lead at Webflow',
    },
    {
      id: 'slack',
      companyLogo: SlackIcon,
      companyName: 'Slack',
      rating: 5,
      content:
        'Extremely reliable developer who consistently produces maintainable code and proactively solves frontend bottlenecks.',
      authorName: 'David Chen',
      authorRole: 'Engineering Manager at Stripe',
    },
    {
      id: 'trustpilot',
      companyLogo: TrustPilotIcon,
      companyName: 'Trustpilot',
      rating: 5,
      content:
        'His deep understanding of component architecture made integrating our design system effortless and bug-free.',
      authorName: 'Jessica Taylor',
      authorRole: 'Senior UX Designer at Figma',
    },
  ],
};
