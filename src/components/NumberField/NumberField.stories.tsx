import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NumberField } from './NumberField';
import { NumberFieldProps } from '@/types/index';

const meta: Meta = {
  title: 'components/Number',
  component: NumberField,
};

export default meta;

const Template: Story<NumberFieldProps> = args => (
  <NumberField name={''} {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  label: 'Number Field',
};
