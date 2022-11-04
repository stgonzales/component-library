import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { TextField } from './TextField';

describe('Text field component', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(
      <TextField type={'text'} label={'Text Field'} name={'text_field'} />
    );

    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement);
  });
});
