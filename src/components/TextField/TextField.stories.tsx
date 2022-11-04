import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextField } from './TextField';
import { TextFieldProps } from '@/types/index';

const meta: Meta = {
  title: 'components/Number',
  component: TextField,
};

export default meta;

const Template: Story<TextFieldProps> = args => (
  <TextField name={'text_field'} {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  label: 'Text Field',
};
