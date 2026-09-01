import type { SectionHeader } from '@/types/sectionHeader';
import devWorkingContactSection from '@/assets/images/dev/devWorkingContactSection.webp';

export type Label = 'Name' | 'Email' | 'Message';
export type FieldType = 'text' | 'email' | 'textarea';
export type Name = 'name' | 'email' | 'message';

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
      placeholder: 'What should I call you?...',
      name: 'name',
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Where can I reach you? ...',
      name: 'email',
    },
    {
      id: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Tell me about your project or just say hi :) ...',
      name: 'message',
    },
  ],
  submitButtonText: "Let's Build Something",
};
