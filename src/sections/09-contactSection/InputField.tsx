import type { FieldType, Label } from '@/data/contactSectionData';
import type { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface InputFieldProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  label: Label;
  type: FieldType;
  placeholder: string;
  errorMassage?: string;
}

const InputField = <T extends FieldValues>({
  register,
  name,
  label,
  placeholder,
  type,
  errorMassage,
}: InputFieldProps<T>) => {
  return (
    <div className='flex flex-col gap-1 lg:gap-3'>
      <div className='flex justify-between items-center'>
        <label htmlFor={name} className='font-bold text-sm lg:text-md'>
          {label}
          <span className='text-[#EE1D52]'>*</span>
        </label>
        {errorMassage && (
          <p className='text-xs text-[#EE1D52]'>{errorMassage}</p>
        )}
      </div>
      {type === 'textarea' ? (
        <textarea
          id={name}
          {...register(name)}
          placeholder={placeholder}
          className='px-2 lg:px-4 border-b py-4 focus:outline-0 h-16'
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...register(name)}
          className='px-2 py-4 lg:px-4 border-b focus:outline-0 h-16'
        />
      )}
    </div>
  );
};

export default InputField;
