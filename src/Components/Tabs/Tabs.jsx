
import React from 'react';

function Tabs(props) {
  const {children, buttons, buttonsContainer  } = props
  const ButtonContainer = buttonsContainer;
  return ( <>
    <ButtonContainer>
    {buttons}
    </ButtonContainer>
    {children}
    </>
  )
}

export default Tabs