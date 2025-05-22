import React, { useState } from 'react'
import PopUp from './Popup'

interface PopupContainerProps {
    isOpen: boolean;
    setIsOpen?: (isOpen: boolean) => void;
}   

const PopupContainer: React.FC<PopupContainerProps> = ({isOpen, setIsOpen}) => {

  return (
    <PopUp 
     isOpen={isOpen} 
     />
  )
}

export default PopupContainer