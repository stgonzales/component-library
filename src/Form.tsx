import React from 'react';
import {
  FormProvider,
  useForm,
  useFormContext,
  useFieldArray,
} from 'react-hook-form';
import { NumberField } from './components/NumberField/NumberField';
import { TextField } from './components/TextField/TextField';
import { ArrayFieldProps, Field, FormProps, ObjectFieldProps } from './types';

const ObjectField = (props: ObjectFieldProps & { name: string }) => {
  const { label, name, properties } = props;

  return (
    <div>
      <label>{label}</label>
      {Object.entries(properties).map(([fieldName, objectField]) => {
        return renderFields([`${name}.${fieldName}`, objectField]);
      })}
    </div>
  );
};

const appendDefaults = {
  text: '',
  number: 0,
  array: [],
  object: {},
};

const ArrayField = (props: ArrayFieldProps & { name: string }) => {
  const { name, itemField } = props;

  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const add = () => {
    append(appendDefaults[itemField.type]);
  };

  return (
    <div>
      <button onClick={add} type="button">
        +
      </button>
      {fields.map((item, index) => {
        return (
          <div key={`ArrayField__${name}_${item.id}`}>
            {renderFields([`${name}[${index}]`, itemField])}
            <button onClick={() => remove(index)} type="button">
              -
            </button>
          </div>
        );
      })}
    </div>
  );
};

const renderFields = ([name, fieldProps]: [string, Field]) => {
  const { register } = useForm();
  if (fieldProps.type === 'text') {
    return <TextField {...fieldProps} name={name} register={register} />;
  }

  if (fieldProps.type === 'number') {
    return <NumberField {...fieldProps} name={name} register={register} />;
  }

  if (fieldProps.type === 'object') {
    return <ObjectField {...fieldProps} name={name} />;
  }

  if (fieldProps.type === 'array') {
    return <ArrayField {...fieldProps} name={name} />;
  }

  return <div>Unknown Type</div>;
};

export const Form: React.FC<FormProps> = ({ fields, onSubmit }: FormProps) => {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {Object.entries(fields).map(renderFields)}
        <button type="submit">Save</button>
      </form>
    </FormProvider>
  );
};
