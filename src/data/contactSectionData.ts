import type { SectionHeader } from '@/types/sectionHeader';
import devWorkingContactSection from '@/assets/images/dev/devWorkingContactSection.webp';

export type Label = 'Name' | 'Email' | 'Subject' | 'Message';
export type FieldType = 'text' | 'email' | 'textarea';
export type Name = 'name' | 'email' | 'subject' | 'message';

export interface FormField {
  id: string;
  name: Name;
  label: Label;
  type: FieldType;
  placeholder: string;
}

export interface ContactSectionData {
  header: SectionHeader;
  imageSrc: string;
  imageAlt: string;
  formFields: FormField[];
  submitButtonText: string;
}

export const contactSectionData: ContactSectionData = {
  header: {
    title: 'Start a Conversation',
    subtitle:
      "I'm open to freelance gigs, collaborations, or even just a casual chat.",
  },
  imageSrc: devWorkingContactSection,
  imageAlt: 'Hary smiling in front of laptop',
  formFields: [
    {
      id: 'name',
      label: 'Name',
      type: 'text',
      placeholder: 'Enter your name?...',
      name: 'name',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email? ...',
      name: 'email',
    },
    {
      id: 'subject',
      label: 'Subject',
      type: 'text',
      placeholder: 'Enter your subject?...',
      name: 'name',
    },
    {
      id: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Enter your message',
      name: 'message',
    },
  ],
  submitButtonText: "Let's Build Something",
};
