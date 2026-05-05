import React from 'react';
import type { Preview } from '@storybook/react-vite';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/shared/styles/theme';
import '@fontsource/pretendard';
import '../src/app/styles/index.css';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
