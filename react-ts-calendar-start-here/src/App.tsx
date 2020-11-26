import React, { useState, useEffect } from 'react';
// Styles
import { GlobalStyle, StyledApp } from './App.styles';

const App: React.FC = () => {
  return (
    <StyledApp>
      <GlobalStyle />
      <div>Start here</div>
    </StyledApp>
  );
};

export default App;
