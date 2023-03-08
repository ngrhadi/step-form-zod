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
  question: z.string().min(5, 'Minimal 3').max(500, 'Maximal 15'),
});

export type SignupInputType = z.infer<typeof SignupInput>;

type TypeUserForm = SignupInputType & {
  onChangeField: (e: Partial<SignupInputType>) => void;
};

export const UserQuestions = ({question, onChangeField}: TypeUserForm) => {
  return (
    <FormWrapper title="Question">
      <div className="flex flex-col w-full gap-2">
        <FieldInput
          placeHolder="Your question"
          titleLabel="Any question"
          htmlFor="jsInExperience"
          type="text"
          required={true}
          autoComplete={'off'}
          isTexArea={true}
          value={question}
          onChange={(e) => onChangeField({ question: e.target.value })}
          // errors={errors}
        />
      </div>
    </FormWrapper>
  );
};
