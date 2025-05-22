import React, { useState } from 'react'
import PopUp from './Popup'
import { set } from 'mongoose';

interface PopupContainerProps {
    onClose: () => void;
}   

const PopupContainer: React.FC<PopupContainerProps> = ({onClose}) => {

  return (
    <PopUp 
     onClose={onClose} // close when clicking outside popup
     />
  )
}

export default PopupContainer