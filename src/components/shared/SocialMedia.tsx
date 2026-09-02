import { Button } from '../ui/button';
import { heroSectionData } from '@/data/heroSectionData';

const SocialMedia = () => {
  const socialMediaItems = heroSectionData.socialLinks;
  return (
    <div className='flex gap-3 lg:gap-4'>
      {socialMediaItems.map((item) => {
        const Icon = item.icon;
        return (
          <Button
            asChild
            variant='outline'
            size='icon'
            key={item.platform}
            className='rounded-full border border-white/20 aspect-square shrink-0 flex justify-center items-center'
          >
            <a href={item.url} target='_blank' rel='noopener noreferrer'>
              <Icon />
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialMedia;
