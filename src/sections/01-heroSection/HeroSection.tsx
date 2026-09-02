import SparkleIcon from '@/assets/icons/react-components-icon/SparkleIcon';
import SectionWrapper from '@/components/layouts/SectionWrapper';
import { heroSectionData } from '@/data/heroSectionData';
import badge from '@/assets/images/badge.png';
import backgroundImg from '@/assets/images/background/purpleMagentaBackground.webp';
import gridPattern from '@/assets/images/background/gridPattern.png';
import SocialMedia from '@/components/shared/SocialMedia';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  const profileInfo = heroSectionData.about;
  return (
    <SectionWrapper
      sectionId='home'
      className='relative flex flex-col pt-17.5 pb-27.25 lg:pb-45'
    >
      <span className='text-center font-bold text-[55.47px] text-[#D9D9D9]/10 lg:text-[141.65px]'>
        PORTFOLIO
      </span>
      <div className='relative max-w-[319.18px] lg:max-w-95.75 -mt-10 lg:-mt-25 mx-auto'>
        <div className='rounded-t-full overflow-hidden'>
          <img src={heroSectionData.profileImage} alt='dev smiling' />
        </div>
        <div className='absolute right-0 top-0 '>
          <SparkleIcon className='size-20.25 lg:size-31.5' />
        </div>
        <div className='absolute -bottom-10.75 right-[-20.82px]'>
          <img src={badge} alt='badge' className='size-24.25 lg:size-30' />
        </div>
      </div>
      <div className='absolute inset-0 -z-1'>
        <img
          src={backgroundImg}
          alt='purple magenta background image'
          className='w-full h-full object-cover object-top-right'
        />
      </div>
      <div className='absolute inset-0 -z-1 overflow-hidden flex items-center'>
        <img
          src={gridPattern}
          alt='grid pattern'
          className='min-w-170 lg:min-w-auto lg:max-w-auto opacity-50 md:opacity-25 xl:opacity-20'
        />
      </div>

      <div className='md:absolute w-full flex flex-col md:flex-row md:items-center md:max-w-200 md:justify-between lg:max-w-286.5 md:w-[calc(100%-2rem)] md:top-[50%] md:left-1/2 md:-translate-x-1/2 gap-3 -mt-13.5'>
        <h1 className='relative flex flex-col md:gap-4 text-display-xl font-bold md:text-[80px] lg:flex-row lg:gap-0'>
          <span>{profileInfo.firstName}</span>
          <span>{profileInfo.lastName}</span>
        </h1>
        <div className='flex flex-col gap-6 md:max-w-50 lg:max-w-78.25'>
          <div className='flex flex-col gap-1'>
            <p className='font-bold text-lg md:text-display-md'>
              {profileInfo.title}
            </p>
            <p className='font-semibold text-neutral-25 text-sm md:text-md'>
              {profileInfo.description}
            </p>
          </div>
          <SocialMedia />
        </div>
      </div>
      <div
        className='absolute bottom-0 left-1/2
         -translate-x-1/2 flex justify-center items-center border border-b-0 border-white/20 rounded-t-full w-full max-w-[73.37px] lg:max-w-26.25 px-[24.46px] lg:px-8.75 pt-[17.05px] lg:pt-10.75 pb-[8.5px] lg:pb-7.25'
      >
        <FaArrowDown className='text-white/20 lg:size-8.75' />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
