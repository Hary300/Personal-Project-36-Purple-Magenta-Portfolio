import { cn } from '@/lib/utils';

interface PurpleSparkleProps {
  className?: string;
}

const PurpleSparkle = ({ className }: PurpleSparkleProps) => {
  return (
    <div
      className={cn(
        "size-7 lg:size-11 bg-linear-to-br from-[#5E2591] to-[#A93FA8] mask-[url('@/assets/icons/sparkle.svg')] mask-contain mask-no-repeat shrink-0",
        className
      )}
    />
  );
};

export default PurpleSparkle;
