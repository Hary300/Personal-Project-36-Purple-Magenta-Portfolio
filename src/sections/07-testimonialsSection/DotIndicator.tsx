import type { CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface DotIndicatorProps {
  count: number;
  api: CarouselApi;
  current: number;
}

const DotIndicator = ({ count, api, current }: DotIndicatorProps) => {
  return (
    <div className='flex gap-1.5'>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          onClick={() => api?.scrollTo(index)}
          className={cn(
            'bg-neutral-800 w-6 h-3 transition-all duration-200 cursor-pointer rounded-full',
            index === current && 'w-12 bg-[#682D9B]'
          )}
        />
      ))}
    </div>
  );
};

export default DotIndicator;
