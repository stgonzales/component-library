import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { NumberFieldProps } from '@/types/index';

export const NumberField = ({
  name,
  label,
  placeholder,
  register,
}: NumberFieldProps & {
  name: string;
  register?: UseFormRegister<FieldValues>;
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="number"
        placeholder={placeholder}
        {...(register && register(name))}
      />
    </div>
  );
};
