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
import { z } from 'zod';
import { FieldInput } from './FieldInput';
import FormWrapper from './FormWrapper';

const SignupInput = z.object({
  jsInYears: z.string().min(1, 'Minimal 3').max(2, 'Maximal 15'),
  tsInYears: z.string().min(1, 'Minimal 3').max(2, 'Maximal 15'),
  totalExperience: z.string().min(1, 'Minimal 3').max(2, 'Maximal 15'),
});

export type SignupInputType = z.infer<typeof SignupInput>;

type TypeUserForm = SignupInputType & {
  onChangeField: (e: Partial<SignupInputType>) => void;
};

export const UserSkills = ({
  jsInYears,
  tsInYears,
  totalExperience,
  onChangeField,
}: TypeUserForm) => {
  return (
    <FormWrapper title="User Experience">
      <div className="flex flex-col w-full gap-2">
        <FieldInput
          placeHolder=""
          titleLabel="Total JS Experience"
          htmlFor="jsInYears"
          type="number"
          required={true}
          autoComplete={"off"}
          value={jsInYears}
          onChange={(e) => onChangeField({ jsInYears: e.target.value })}
          // errors={errors}
        />
        <FieldInput
          placeHolder=""
          required={true}
          titleLabel="Total TS Experience"
          htmlFor="tsInYears"
          type="number"
          autoComplete={"off"}
          value={tsInYears}
          onChange={(e) => onChangeField({ tsInYears: e.target.value })}
          // errors={errors}
        />
        <FieldInput
          required={true}
          placeHolder=""
          titleLabel="Total All Experience"
          htmlFor="totalExperience"
          type="number"
          autoComplete={"off"}
          value={totalExperience}
          onChange={(e) => onChangeField({ totalExperience: e.target.value })}
          // errors={errors}
        />
      </div>
    </FormWrapper>
  );
};
