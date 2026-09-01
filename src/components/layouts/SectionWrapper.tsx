import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  sectionId: 'home' | 'about' | 'skill' | 'projects' | 'faq' | (string & {});
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({
  sectionId,
  children,
  className,
}: SectionWrapperProps) => {
  return (
    <section
      id={sectionId}
      className={cn(
        'pt-10 pb-10 px-4 sm:px-10 lg:px-15 xl:px-30 lg:pt-20 lg:pb-20 max-w-360 mx-auto',
        className
      )}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
