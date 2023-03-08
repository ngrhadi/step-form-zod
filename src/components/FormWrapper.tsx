import { ReactNode } from 'react';

interface FormWrapperProps {
  title: string;
  children: ReactNode;
}

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <div>
      <h1 className="w-full align-middle text-center text-2xl font-bold py-4">{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default FormWrapper;
