import { navbarData } from '@/data/navBarData';
import { Button } from '../ui/button';

interface CtaButtonProps {
  closeMenu: () => void;
}
const CtaButton = ({ closeMenu }: CtaButtonProps) => {
  const ctaButtonData = navbarData.ctaButton;
  return (
    <Button asChild>
      <a href={ctaButtonData.href} onClick={closeMenu} className='w-full'>
        {ctaButtonData.label}
      </a>
    </Button>
  );
};

export default CtaButton;
