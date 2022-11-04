import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { NumberField } from './NumberField';

describe('Number field component', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(<NumberField label={'Text Field'} name={'text_field'} />);

    expect(screen.getByRole('spinbutton')).toBeInstanceOf(HTMLInputElement);
  });
});
