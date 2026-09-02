import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import Logo from '../shared/Logo';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { navbarData } from '@/data/navBarData';
import CtaButton from '../shared/CtaButton';

const Header = () => {
  const [isMenuShown, setIsShownMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScroll]);

  const handleHamburgerClick = () => {
    setIsShownMenu((prev) => !prev);
  };

  if (isMenuShown) {
    document.documentElement.classList.add('overflow-hidden');
  } else {
    document.documentElement.classList.remove('overflow-hidden');
  }

  const navItems = navbarData.navItems;

  return (
    <header
      className={cn(
        'fixed w-full max-w-360 left-1/2 -translate-x-1/2 flex flex-col gap-10.5 lg:flex-row lg:justify-between lg:items-center pt-6.5 pb-6.5 items-start z-50 px-4 sm:px-10 lg:px-15 xl:px-30 transition-all duration-50 ease-in-out ',
        isMenuShown ? 'h-screen bg-black' : 'h-22',
        isScroll && 'backdrop-blur-2xl'
      )}
    >
      <div className='flex justify-between w-full lg:w-auto items-center'>
        <Logo />
        <div onClick={handleHamburgerClick} className='lg:hidden'>
          {isMenuShown ? (
            <RxCross2 className='size-6' />
          ) : (
            <RxHamburgerMenu className='size-6' />
          )}
        </div>
      </div>
      {isMenuShown && (
        <div className='flex flex-col gap-6 md:gap-10 w-full'>
          <ul className='flex flex-col gap-2 md:gap-6'>
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='font-medium text-md'
                  onClick={() => setIsShownMenu(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <CtaButton closeMenu={() => setIsShownMenu(false)} />
        </div>
      )}
      <ul className='hidden lg:flex justify-between gap-6'>
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className='font-medium text-md'
              onClick={() => setIsShownMenu(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className='hidden lg:block w-full max-w-41.75'>
        <CtaButton closeMenu={() => setIsShownMenu(false)} />
      </div>
    </header>
  );
};

export default Header;
