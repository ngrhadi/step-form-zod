import React from "react";

type PropInput = {
  placeHolder: string;
  titleLabel: string;
  htmlFor: string;
  type: string;
  required?: boolean;
  autoComplete: string;
  isTexArea?: boolean;
  value: string | number;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const FieldInput = ({
  placeHolder,
  htmlFor,
  type,
  required,
  titleLabel,
  value,
  autoComplete,
  ...props
}: PropInput) => {
  return (
    <>
      <label htmlFor={htmlFor}>{titleLabel}</label>
      {props.isTexArea ? (
        <textarea
          className={`p-2 h-32`}
          autoComplete={'off'}
          placeholder={placeHolder}
          id={htmlFor}
          required={required}
          name={htmlFor}
          value={value}
          onChange={props.onChange}
        />
      ) : (
        <input
          className={`p-2`}
          placeholder={placeHolder}
          id={htmlFor}
          autoComplete={'off'}
          required={required}
          name={htmlFor}
          type={type}
          value={value}
          onChange={props.onChange}
        />
      )}
    </>
  );
};
