import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './index';

import Sample from './Card.sample';

describe('Card molecule component', () => {
  it('should render without crashing', () => {
    render(<Card country={Sample} />);

    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  it('should render with correct data', () => {
    render(<Card country={Sample} />);

    expect(screen.getByAltText(Sample.name)).toBeInTheDocument();
    expect(screen.getByText(Sample.name)).toBeInTheDocument();
    expect(screen.getByText(Sample.capital)).toBeInTheDocument();
    expect(screen.getByText(Sample.region)).toBeInTheDocument();
    expect(
      screen.getByText(Intl.NumberFormat().format(Sample.population)),
    ).toBeInTheDocument();
  });

  it('should have the right link', () => {
    render(<Card country={Sample} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/${Sample.name}`);
  });
});
