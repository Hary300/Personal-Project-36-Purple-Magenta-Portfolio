import { navbarData } from '@/data/navBarData';

const Logo = () => {
  const logoData = navbarData.logo;
  const Icon = logoData.icon;

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='flex items-center gap-2' onClick={handleClick}>
      <Icon className='size-6' />
      <span className='font-bold text-xl'>{logoData.text}</span>
    </div>
  );
};

export default Logo;
