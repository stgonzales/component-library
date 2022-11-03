import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form, FormProps } from '../src';

const meta: Meta = {
  title: 'Form',
  component: Form,
};

export default meta;

const Template: Story<FormProps> = args => <Form {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

const fields: FormProps['fields'] = {
  email: {
    type: 'text',
    label: 'Email',
  },
  count: {
    type: 'number',
    label: 'Count',
  },
  myObj: {
    type: 'object',
    label: 'SubProps',
    properties: {
      subObject: {
        type: 'text',
        label: 'Sub Property',
        htmlType: 'email',
      },
    },
  },
  myArray: {
    type: 'array',
    label: 'My Array',
    itemField: {
      type: 'text',
      label: 'Array text',
    },
  },
  kv: {
    type: 'array',
    label: 'Headers',
    itemField: {
      type: 'object',
      label: 'Array text',
      properties: {
        key: {
          type: 'text',
          label: 'Key',
        },
        value: {
          type: 'text',
          label: 'Value',
        },
      },
    },
  },
};

Default.args = {
  fields,
  onSubmit: values => console.log(values),
};
