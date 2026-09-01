import errorEnvelope from '@/assets/images/modal/errorEnvelope.png';
import successEnvelope from '@/assets/images/modal/successEnvelope.png';

export interface ContactModalState {
  status: 'success' | 'error';
  title: string;
  image: string;
  message: string;
  buttonText: string;
}

export interface ContactModalsData {
  success: ContactModalState;
  error: ContactModalState;
}

export const contactModalsData: ContactModalsData = {
  success: {
    status: 'success',
    title: 'Message Sent Successfully!',
    image: successEnvelope,
    message:
      "Thank you for reaching out.\nI'll get back to you as soon as possible.",
    buttonText: 'Back to Home',
  },
  error: {
    status: 'error',
    title: 'Send Failed',
    image: errorEnvelope,
    message: "Something broke along the way. Let's try resending it.",
    buttonText: 'Try Again',
  },
};
