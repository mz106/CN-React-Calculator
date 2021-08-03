import React from 'react';
import './App.css';
import styled from 'styled-components';
import buttons from './buttons.json';
import { evaluate } from "mathjs";
import Calc from './components/Calc';


function App() {
  
  return (
    
    <div>
      <Calc buttons={buttons} />
    </div>

  );
}

export const ScreenWrapper = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  text-align: center;
`

export const ButtonWrapper = styled.div`
  display: flex;
`

export const StyledButton = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid black;
  text-align: center;
  padding: 5px;
`


export default App;