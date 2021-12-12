import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './index';

const callbackFn = jest.fn();

const setup = () => {
  const utils = render(<Filter onChange={callbackFn} />);
  const input = screen.getByLabelText('search-input');
  return {
    input,
    ...utils,
  };
};

describe('Filter organism component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = setup();
    expect(getByTestId('filter')).toBeInTheDocument();
  });

  it('should trigger callback on change', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '23' } });
    expect(callbackFn).toBeCalled();
  });
});
