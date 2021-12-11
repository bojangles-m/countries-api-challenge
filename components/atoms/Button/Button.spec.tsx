import React from 'react';
import { render, screen } from '@testing-library/react';

import Button, { ButtonStyle } from './index';

const btnText = 'delectus aspernatur non';
const callbackFn = jest.fn();

describe('Button atom component', () => {
  it('should render without crashing', () => {
    render(<Button onClick={callbackFn}>{btnText}</Button>);
    const btn = screen.getByTestId('button');
    expect(btn).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    render(<Button onClick={callbackFn}>{btnText}</Button>);
    expect(screen.getByText(btnText)).toBeInTheDocument();
  });

  it('should trigger callback on click', () => {
    render(<Button onClick={callbackFn}>{btnText}</Button>);
    const btn = screen.getByTestId('button');
    btn.click();
    expect(callbackFn).toBeCalled();
  });

  it('should correctly render button style', () => {
    render(
      <Button onClick={callbackFn} buttonStyle={ButtonStyle.PLAIN}>
        {btnText}
      </Button>,
    );
    const btn = screen.getByTestId('button');
    expect(btn).toHaveClass('plain');
  });
});
