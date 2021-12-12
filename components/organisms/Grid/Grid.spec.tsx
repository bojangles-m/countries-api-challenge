import React from 'react';
import { render } from '@testing-library/react';
import Grid from './index';

const child = 'I am grid child';

const setup = () => {
  const utils = render(<Grid>{child}</Grid>);
  return {
    ...utils,
  };
};

describe('Grid organism component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = setup();
    expect(getByTestId('grid')).toBeInTheDocument();
  });
});
