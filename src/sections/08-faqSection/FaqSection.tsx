import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { faqSectionData } from '@/data/faqSectionData';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const FaqSection = () => {
  const header = faqSectionData.header;
  const faqs = faqSectionData.faqs;
  return (
    <SectionWrapper sectionId='faq' hasGap>
      <SectionTitle title={header.title} subtitle={header.subtitle} />
      <Accordion defaultValue='technologies' collapsible type='single'>
        {faqs.map((item) => (
          <AccordionItem key={item.value} value={item.value} className='group'>
            <div className='grid grid-cols-[auto_1fr] gap-4'>
              <div className='pt-4'>
                <ChevronDownIcon
                  data-slot='accordion-trigger-icon'
                  className='pointer-events-none shrink-0 group-data-[state=open]:hidden'
                />
                <ChevronUpIcon
                  data-slot='accordion-trigger-icon'
                  className='pointer-events-none hidden shrink-0 group-data-[state=open]:inline'
                />
              </div>
              <div>
                <AccordionTrigger className='text-lg text-neutral-25 lg:text-display-sm font-semibold cursor-pointer'>
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent className='text-sm text-neutral-400 lg:text-md'>
                  {item.content}
                </AccordionContent>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
};

export default FaqSection;
