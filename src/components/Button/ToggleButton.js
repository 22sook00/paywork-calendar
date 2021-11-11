import React from 'react';
import {ToggleWrapper} from './styledButton';

function ToggleButton({ toggle, mode }) {

  return (
    <ToggleWrapper 
    onClick={toggle} 
    mode={mode}>
      {mode === 'dark' ?
      'DarkMode' : 'LightMode'}
    </ToggleWrapper>
  )
}

export default ToggleButton
