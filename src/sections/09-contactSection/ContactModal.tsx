import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import type { ContactModalState } from '@/data/contactModalData';

interface ContactModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  modal: ContactModalState;
}

const ContactModal = ({ modal, isOpen, onOpenChange }: ContactModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className=' sm:max-w-115.25  bg-black'>
        <div className='relative flex flex-col gap-6 lg:gap-8 px-6 pb-6 pt-25 lg:pt-30'>
          <div className='absolute left-1/2 -translate-x-1/2 -top-12.25 max-w-32.25 '>
            <img
              src={modal.image}
              alt={`${modal.title} image`}
              className={modal.status === 'success' ? '' : 'grayscale'}
            />
          </div>
          <div className='flex flex-col gap-0.5 lg:gap-2 text-center'>
            <p className='font-bold text-lg lg:text-xl text-neutral-25'>
              {modal.title}
            </p>
            <p className='text-sm lg:text-md text-neutral-400'>
              {modal.message}
            </p>
          </div>
          <Button onClick={() => onOpenChange(false)}>
            {modal.buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
