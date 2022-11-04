import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Form } from './Form';
import { FormProps } from '@/types/index';

describe('Form component', () => {
  afterEach(cleanup);

  it('should render a empty form', () => {
    const fields: FormProps['fields'] = {};

    render(<Form fields={fields} onSubmit={() => {}} />);

    expect(screen.getByRole('form')).toBeInstanceOf(HTMLFormElement);
  });

  it('should render a form with one input type text', () => {
    const fields: FormProps['fields'] = {
      input: {
        type: 'text',
        label: 'Text Field',
      },
    };

    render(<Form fields={fields} onSubmit={() => {}} />);

    expect(screen.getByRole('form')).toBeInstanceOf(HTMLFormElement);
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
  });

  it('should render a form with one input type number', () => {
    const fields: FormProps['fields'] = {
      input: {
        type: 'number',
        label: 'Number Field',
      },
    };

    render(<Form fields={fields} onSubmit={() => {}} />);

    expect(screen.getByRole('form')).toBeInstanceOf(HTMLFormElement);
    expect(screen.getByRole('spinbutton')).toBeInstanceOf(HTMLInputElement);
  });
});
