import React from 'react'
import ButtonContainer from '../../Components/Button/ButtonContainer'
import ContactCardContainer from '../../Components/ContactCard/ContactCardContainer';
import type { Contact } from '../../Types/types';

interface ContactPageProps {
  contact: Contact[],
  onOpenPopup: () => void,
  onContactClick: (contact: Contact) => void;

}

const ContactPage: React.FC<ContactPageProps> = ({contact, onOpenPopup, onContactClick}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-5 sm:p-10 flex justify-center">
      <div className='w-full max-w-4xl bg-blue-100 flex flex-col shadow-md rounded-md'>
        <div className='flex flex-col sm:flex-row items-center justify-between px-5 sm:px-10 py-6'>
          <h1 className='font-semibold text-xl sm:text-2xl mb-3 sm:mb-0'>Contacts</h1>
          <ButtonContainer
          text={'Add Contact'}
          onClick={onOpenPopup}
          />    
        </div>
        <div className='flex flex-col gap-5 px-5 sm:px-10 pb-10'>
           {contact.length === 0 && (
            <p className="text-center text-gray-600 py-10">No contacts available. Make some friends!</p>
          )}
          {contact.map((contact, i) => (
            <ContactCardContainer
              key={i}
              contact={contact}
              onClick={() => onContactClick(contact)}
            />
          ))}
        </div>
      </div>
    </div> 
  )
}

export default ContactPage