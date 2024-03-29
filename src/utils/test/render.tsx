import { render } from '@testing-library/react';
import  { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import  theme  from '../../styles/theme';

export const renderWithTheme = (children: ReactNode) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

