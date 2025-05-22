import React from 'react'
import ButtonContainer from '../../Components/Button/ButtonContainer'
import ContactCardContainer from '../../Components/ContactCard/ContactCardContainer';

interface Contact {
  id: number,
  picture?: File,
  name: string,
  dateOfBirth: Date;
}

interface ContactPageProps {
  onOpenPopup: () => void;
  contact: Contact[];
}

const ContactPage: React.FC<ContactPageProps> = ({onOpenPopup, contact}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className='w-4/5 bg-blue-100 flex flex-col shadow-md'>
        <div className='flex flex-row content-center justify-between w-full px-20 my-10'>
          <h1 className='font-semibold text-lg'>Contacts</h1>
          <ButtonContainer
          text={'Add Contact'}
          onClick={onOpenPopup}
          />    
        </div>
        <div className='flex flex-col m-10 w-3/5 gap-5'>
          {contact.map((contact) => (
            <ContactCardContainer
              key={contact.id}
              picture={contact.picture}
              name={contact.name}
              dateOfBirth={contact.dateOfBirth}
            />
          ))}
        </div>
      </div>
    </div> 
  )
}

export default ContactPage