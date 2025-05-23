import React from 'react'
import InputContainer from '../Input/InputContainer';
import type { Contact } from '../../Types/Contact';

interface ContactPopupProps {
  contact?: Contact
  onClose: () => void
}

const ContactPopup: React.FC<ContactPopupProps> = ( { contact, onClose }) => {
 return (
    // Blackout background with some transparency (backdrop-filter for blur + bg opacity)
    <div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose} // close when clicking outside popup
    >
      <div
        className="bg-white rounded-lg shadow-lg p-4 w-[150px] h-[200px] max-w-full mx-4"
        onClick={e => e.stopPropagation()} // prevent close on popup click
      >
        <InputContainer
        title={'Name'}
        value={contact?.name}
        onChange={function (): void {
        throw new Error('Function not implemented.');
        }}
        maxLength={50}
        />

        <InputContainer
        title={'Date of Birth'}
        type='date'
        value={contact?.dateOfBirth.toISOString().split('T')[0]} // format date to YYYY-MM-DD
        onChange={function (): void {
        throw new Error('Function not implemented.');
        }}
        />
      </div>
    </div>
  )
}

export default ContactPopup