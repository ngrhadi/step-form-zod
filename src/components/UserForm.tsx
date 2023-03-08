import * as React from 'react';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage,
} from 'formik';
import { string, z } from 'zod';
import { FieldInput } from './FieldInput';
import FormWrapper from './FormWrapper';

const SignupInput = z.object({
  firstName: z.string().min(3, 'Minimal 3').max(15, 'Maximal 15'),
  lastName: z.string().min(3, 'Minimal 3').max(15, 'Maximal 15'),
  email: z.string().email(),
  password: z
    .string()
    .regex(/[a-z]/g, 'lowercase')
    .regex(/[A-Z]/g, 'uppercase')
    .regex(/[!@#$&*]/g, 'uniq characters only !@#$&*')
    .min(8)
    .max(8),
});
export type SignupInputType = z.infer<typeof SignupInput>;

type TypeUserForm = SignupInputType & {
  onChangeField: (e: Partial<SignupInputType>) => void;
};

export const UserForm = ({
  firstName,
  lastName,
  email,
  password,
  onChangeField,
}: TypeUserForm) => {
  return (
    <FormWrapper title="User Indentity">
      <div className="flex flex-col w-full gap-2">
        <FieldInput
          placeHolder="First Name"
          titleLabel="First Name"
          htmlFor="firstName"
          type="text"
          required={true}
          autoComplete={"off"}
          value={firstName}
          onChange={(e) => onChangeField({ firstName: e.target.value })}
          // errors={errors}
        />
        <FieldInput
          placeHolder="Last Name"
          required={true}
          titleLabel="Last Name"
          htmlFor="lastName"
          type="text"
          autoComplete={"off"}
          value={lastName}
          onChange={(e) => onChangeField({ lastName: e.target.value })}
          // errors={errors}
        />
        <FieldInput
          required={true}
          placeHolder="Email"
          titleLabel="Email"
          htmlFor="email"
          type="email"
          autoComplete={"off"}
          value={email}
          onChange={(e) => onChangeField({ email: e.target.value })}
          // errors={errors}
        />
        <FieldInput
          required={true}
          placeHolder="Password"
          titleLabel="Password"
          htmlFor="password"
          type="password"
          autoComplete={"off"}
          value={password}
          onChange={(e) => onChangeField({ password: e.target.value })}
          // errors={errors}
        />
      </div>
    </FormWrapper>
  );
};
