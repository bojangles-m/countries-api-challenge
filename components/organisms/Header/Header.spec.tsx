import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { THEME } from '../../../hooks/useThemeToggle';
import Header from './index';

const title = 'Where in the world?';
const buttonTextForLightMode = 'Dark Mode';
const buttonTextForDarkMode = 'Light Mode';

const setup = (theme?: THEME) => {
  const utils = render(<Header theme={theme} />);
  return {
    ...utils,
  };
};

describe('Header organism component', () => {
  it('should render without crashing', () => {
    const { getByText } = setup();
    expect(getByText(title)).toBeInTheDocument();
  });

  it('should render without button', () => {
    const { queryByRole } = setup();
    expect(queryByRole('button')).not.toBeInTheDocument();
  });

  it('should render Light theme', () => {
    const { getByText, queryByText } = setup(THEME.LIGHT);
    expect(getByText(buttonTextForLightMode)).toBeInTheDocument();
    expect(queryByText(buttonTextForDarkMode)).not.toBeInTheDocument();
  });

  it('should render Dark theme on click', async () => {
    const { getByRole, findByText } = setup(THEME.LIGHT);
    const btn = getByRole('button');
    fireEvent.click(btn);
    await findByText(buttonTextForDarkMode);
  });

  it('should theme toggle button be clickable', () => {
    const { getByRole } = setup(THEME.LIGHT);
    fireEvent.click(
      getByRole('button'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
  });
});
