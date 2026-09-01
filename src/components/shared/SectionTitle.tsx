import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}
const SectionTitle = ({ title, subtitle, className }: SectionTitleProps) => {
  return (
    <div className={cn('flex flex-col gap-2 lg:gap-4 text-center', className)}>
      <h2 className='font-bold text-display-sm lg:text-display-2xl'>{title}</h2>
      <p className='text-md lg:text-lg'>{subtitle}</p>
    </div>
  );
};

export default SectionTitle;
