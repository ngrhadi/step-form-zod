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
  poscode: z.string().min(3, 'Minimal 3').max(15, 'Maximal 15'),
  address: z.string().min(10),
  city: z.string().min(3, 'Minimal 3').max(15, 'Maximal 15'),
  country: z.string(),
});

export type SignupInputType = z.infer<typeof SignupInput>;

type TypeUserForm = SignupInputType & {
  onChangeField: (e: Partial<SignupInputType>) => void;
};


export const UserAddres = ({
  poscode,
  address,
  city,
  country,
  onChangeField
}: TypeUserForm) => {

  return (
    <FormWrapper title="User Address">
      <div className="flex flex-col w-full gap-2">
        <FieldInput
          placeHolder="Post Code"
          titleLabel="Post Code"
          htmlFor="PostCode"
          type="number"
          required={true}
          autoComplete={"off"}
          value={poscode}
          onChange={(e) => onChangeField({ poscode: e.target.value })}
          // errors={errors}
        />
        <FieldInput
          placeHolder="Address"
          required={true}
          titleLabel="Address"
          htmlFor="address"
          type="text"
          isTexArea={true}
          autoComplete={"off"}
          value={address}
          onChange={(e) => onChangeField({ address: e.target.value })}
          // errors={errors}
        />
        <FieldInput
          required={true}
          placeHolder="City"
          titleLabel="City"
          htmlFor="city"
          type="text"
          autoComplete={"off"}
          value={city}
          onChange={(e) => onChangeField({ city: e.target.value })}
          // errors={errors}
        />
        <FieldInput
          required={true}
          placeHolder="Country"
          titleLabel="Country"
          htmlFor="country"
          type="text"
          autoComplete={"off"}
          value={country}
          onChange={(e) => onChangeField({ country: e.target.value })}
          // errors={errors}
        />
      </div>
    </FormWrapper>
  );
};
