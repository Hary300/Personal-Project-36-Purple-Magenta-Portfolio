import { navbarData } from '@/data/navBarData';

const Logo = () => {
  const logoData = navbarData.logo;
  const Icon = logoData.icon;

  return (
    <a href='#home' className='flex items-center gap-2'>
      <Icon className='size-6' />
      <span className='font-bold text-xl'>{logoData.text}</span>
    </a>
  );
};

export default Logo;
