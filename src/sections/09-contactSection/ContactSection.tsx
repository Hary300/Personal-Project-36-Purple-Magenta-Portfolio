import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { contactSectionData } from '@/data/contactSectionData';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const header = contactSectionData.header;
  const devImgSrc = contactSectionData.imageSrc;
  const devImgAlt = contactSectionData.imageAlt;
  return (
    <SectionWrapper sectionId='contact'>
      <div className='flex flex-col lg:flex-row border overflow-hidden rounded-tl-2xl rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tr-none '>
        <div className='xl:flex-1'>
          <img src={devImgSrc} alt={devImgAlt} />
        </div>
        <div className='xl:flex-1 py-6 px-4 lg:py-8 lg:px-5 flex flex-col gap-6 lg:gap-8'>
          <SectionTitle
            title={header.title}
            subtitle={header.subtitle}
            className='text-left'
          />
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
