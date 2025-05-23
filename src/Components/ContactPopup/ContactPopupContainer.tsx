import React, { useState } from 'react'
import ContactPopup from './ContactPopup'
import type { Contact } from '../../Types/Contact';

interface ContactPopupContainerProps {
    contact?: Contact
    onClose: () => void,
}   

const ContactPopupContainer: React.FC<ContactPopupContainerProps> = ({contact, onClose}) => {

  return (
    <ContactPopup 
     onClose={onClose}
     contact={contact}// close when clicking outside popup
     />
  )
}

export default ContactPopupContainer