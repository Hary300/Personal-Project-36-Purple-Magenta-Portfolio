import { contactSchema, type ContactSchema } from '@/schemas/contactSchema';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSectionData } from '@/data/contactSectionData';
import InputField from './InputField';
import { Button } from '@/components/ui/button';
import {
  contactModalsData,
  type ContactModalsData,
} from '@/data/contactModalData';
import ContactModal from './ContactModal';
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSchema>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(contactSchema),
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: ContactSchema) => {
    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(data);
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.log(error);
      setIsSuccess(false);
    } finally {
      setIsOpen(true);
      setIsSubmitting(false);
    }
  };

  const fields = contactSectionData.formFields;
  const buttonText = contactSectionData.submitButtonText;

  const modalKey: keyof ContactModalsData = isSuccess ? 'success' : 'error';
  const modal = contactModalsData[modalKey];

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-5 lg:gap-6'
      >
        {fields.map((field) => {
          const errorMessage = errors[field.name]?.message;
          return (
            <InputField
              key={field.id}
              name={field.name}
              register={register}
              label={field.label}
              placeholder={field.placeholder}
              type={field.type}
              errorMassage={errorMessage}
            />
          );
        })}
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Sending message...' : buttonText}
        </Button>
      </form>
      <ContactModal
        isOpen={isOpen}
        modal={modal}
        onOpenChange={(isOpen) => setIsOpen(isOpen)}
      />
    </>
  );
};

export default ContactForm;
