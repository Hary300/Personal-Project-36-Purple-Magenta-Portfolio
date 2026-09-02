import { navbarData } from '@/data/navBarData';
import { Button } from '../ui/button';
import type { ReactNode } from 'react';

interface CtaButtonProps {
  closeMenu?: () => void;
  children?: ReactNode;
}
const CtaButton = ({ closeMenu, children }: CtaButtonProps) => {
  const ctaButtonData = navbarData.ctaButton;
  return (
    <Button asChild>
      <a href={ctaButtonData.href} onClick={closeMenu} className='w-full'>
        {children ? children : ctaButtonData.label}
      </a>
    </Button>
  );
};

export default CtaButton;
