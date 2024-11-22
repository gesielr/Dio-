import React from 'react';
import { ButtonContainer } from './stylebutton';

const Button = ({ label, onClick }) => {
  return <ButtonContainer onClick={onClick}>{label}</ButtonContainer>;
};

export default Button;
