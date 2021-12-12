import React from 'react';
import { render } from '@testing-library/react';
import Card from './index';

import Sample from './Card.sample';

const setup = () => {
  const utils = render(<Card country={Sample} />);
  return {
    ...utils,
  };
};

describe('Card molecule component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = setup();
    expect(getByTestId('card')).toBeInTheDocument();
  });

  it('should render with correct data', () => {
    const { getByAltText, getByText } = setup();

    expect(getByAltText(Sample.name)).toBeInTheDocument();
    expect(getByText(Sample.name)).toBeInTheDocument();
    expect(getByText(Sample.capital)).toBeInTheDocument();
    expect(getByText(Sample.region)).toBeInTheDocument();
    expect(
      getByText(Intl.NumberFormat().format(Sample.population)),
    ).toBeInTheDocument();
  });

  it('should have the right link', () => {
    const { getByRole } = setup();
    expect(getByRole('link')).toHaveAttribute('href', `/${Sample.name}`);
  });
});
