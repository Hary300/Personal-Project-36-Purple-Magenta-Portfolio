import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { testimonialsSectionData } from '@/data/testimonialsSectionData';
import Autoplay from 'embla-carousel-autoplay';
import { TiStarFullOutline } from 'react-icons/ti';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import DotIndicator from './DotIndicator';

const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const count = api?.scrollSnapList().length ?? 0;

  useEffect(() => {
    if (!api) {
      return;
    }
    const update = () => {
      setCurrent(api.selectedScrollSnap());
    };

    update();

    api.on('select', update);

    return () => {
      api.off('select', update);
    };
  }, [api]);

  const header = testimonialsSectionData.header;
  const testimonials = testimonialsSectionData.testimonials;
  return (
    <SectionWrapper sectionId='testimonial' hasGap>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <Carousel
        setApi={setApi}
        plugins={[Autoplay({ delay: 3000 })]}
        opts={{
          align: 'start',
        }}
        className='w-full flex flex-col gap-6 '
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => {
            const CompanyLogo = testimonial.companyLogo;
            return (
              <CarouselItem
                key={index}
                className='basis-1/1 md:basis-1/2 xl:basis-1/3'
              >
                <div className='relative p-4 rounded-2xl lg:gap-5 flex flex-col gap-15.25 border overflow-hidden h-full'>
                  <div className='absolute inset-0 bg-radial-[100%_100%_at_5%_0] from-[#34144C] to-transparent form-0% to-80% -z-1' />
                  <div className='flex flex-col gap-6 lg:gap-8'>
                    <CompanyLogo />
                    <div className='flex items-center gap-1'>
                      {Array.from({ length: testimonial.rating }).map(
                        (_, index) => (
                          <TiStarFullOutline
                            key={index}
                            className='text-[#F3B64C] size-6'
                          />
                        )
                      )}
                    </div>
                    <div className='text-neutral-25 font-medium text-md lg:text-lg'>
                      "{testimonial.content}"
                    </div>
                  </div>

                  <div className='flex flex-col gap-0.5 '>
                    <p className='text-neutral-25 font-bold text-sm lg:text-md'>
                      {testimonial.authorName}
                    </p>
                    <p className='text-neutral-400 text-sm lg:text-md'>
                      {testimonial.authorRole}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className='flex justify-center'>
          <DotIndicator api={api} count={count} current={current} />
        </div>
      </Carousel>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
