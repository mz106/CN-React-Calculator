import React, { useState } from 'react';
import { ScreenWrapper, ButtonWrapper, StyledButton } from '../App';
import { evaluate } from "mathjs";

export function Calc({ buttons }) {

  const [screen, setScreen] = useState([0]);

  const handleClick = (value) => {
    let newArr = [...screen]
    
    if(newArr[0] === 0) {
      newArr.shift()
    } 
    setScreen([...newArr, value])

    if (value === '=') {
      let numStr = newArr.join('')
      let total = evaluate(numStr)
      setScreen([total])
    } else if (value === 'clear') {
      setScreen([0])
    }
        
  }

  return (
    <div>
      <ScreenWrapper>
        {screen}
      </ScreenWrapper>
      <ButtonWrapper>
        {buttons.map((item, index) => (
          <StyledButton
            key={index}
            index={index}
            value={item.value}
            onClick={() => handleClick(item.value)}
          >
            {item.displayValue}
          </StyledButton>
        ))}
      </ButtonWrapper>
    </div>
  );
}

export default Calc;