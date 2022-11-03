import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { TextFieldProps } from '@/types/index';

export const TextField = ({
  name,
  label,
  placeholder,
  htmlType = 'text',
  register,
}: TextFieldProps & {
  name: string;
  register?: UseFormRegister<FieldValues>;
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={htmlType}
        placeholder={placeholder}
        {...(register && register(name))}
      />
    </div>
  );
};
