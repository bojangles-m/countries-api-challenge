import React from 'react';
import { render } from '@testing-library/react';

import Button, { ButtonStyle } from './index';

const btnText = 'delectus aspernatur non';
const callbackFn = jest.fn();

const setup = (buttonStyle?: ButtonStyle) => {
  const utils = render(
    <Button onClick={callbackFn} buttonStyle={buttonStyle}>
      {btnText}
    </Button>,
  );
  return {
    ...utils,
  };
};

describe('Button atom component', () => {
  it('should render without crashing', () => {
    const { getByTestId } = setup();
    expect(getByTestId('button')).toBeInTheDocument();
  });

  it('should render children correctly', () => {
    const { getByText } = setup();
    expect(getByText(btnText)).toBeInTheDocument();
  });

  it('should trigger callback on click', () => {
    const { getByTestId } = setup();
    getByTestId('button').click();
    expect(callbackFn).toBeCalled();
  });

  it('should correctly render button style', () => {
    const { getByTestId } = setup(ButtonStyle.PLAIN);
    expect(getByTestId('button')).toHaveClass('plain');
  });
});
