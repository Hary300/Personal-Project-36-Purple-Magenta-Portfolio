import { cn } from '@/lib/utils';

const SparkleIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    className={cn('w-7.5 h-7.5', className ?? '')}
    {...props}
  >
    <path
      d='M15 30C14.5657 15.7893 14.2107 15.4365 0 15C14.2107 14.5657 14.5635 14.2107 15 0C15.4343 14.2107 15.7893 14.5635 30 15C15.7893 15.4365 15.4365 15.785 15 30Z'
      fill='currentColor'
    />
  </svg>
);

export default SparkleIcon;
