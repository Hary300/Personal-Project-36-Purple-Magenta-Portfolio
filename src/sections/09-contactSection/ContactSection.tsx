import SectionWrapper from '@/components/layouts/SectionWrapper';
import SectionTitle from '@/components/shared/SectionTitle';
import { contactSectionData } from '@/data/contactSectionData';

const ContactSection = () => {
  const header = contactSectionData.header;
  const devImgSrc = contactSectionData.imageSrc;
  const devImgAlt = contactSectionData.imageAlt;
  return (
    <SectionWrapper sectionId='contact'>
      <div className='flex flex-col md:flex-row border'>
        <div className='flex-1'>
          <img src={devImgSrc} alt={devImgAlt} />
        </div>
        <div className='flex-1'>
          <SectionTitle
            title={header.title}
            subtitle={header.subtitle}
            className='text-left'
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
