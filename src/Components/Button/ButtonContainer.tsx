import React from 'react'
import Button from './Button';

interface ButtonContainerProps {
    text: string;
    onClick: () => void;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({text, onClick}) => {
  return (
   <Button
   text={text}
   onClick={onClick}
   />
  );
}

export default ButtonContainer