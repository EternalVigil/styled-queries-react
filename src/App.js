import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import MainColumn from './components/MainColumn';

import { colorScheme } from './constants/colorScheme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.styles.background};
  transition: all 0.5s;
  overflow: hidden;
`;

const App = () => {
  const [currentTheme, updateTheme] = useState('default');

  return (
    <ThemeProvider theme={colorScheme[currentTheme]}>
      <Container styles={colorScheme[currentTheme]}>
        <MainColumn currentTheme={currentTheme} updateTheme={updateTheme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
