import React from 'react'
import ButtonContainer from '../../Components/Button/ButtonContainer'

interface ContactPageProps {
  onOpenPopup: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({onOpenPopup}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className='w-4/5 bg-blue-200 flex flex-col shadow-md'>
        <div className='flex flex-row content-center justify-between w-full px-20'>
          <h1 className='font-semibold text-lg'>Contacts</h1>
          <ButtonContainer
          text={'Add Contact'}
          onClick={onOpenPopup}
          />    
        </div>
        <div className='flex flex-col m-10'>
          <h2>TEST</h2>
          <h2>TEST</h2>
          <h2>TEST</h2>
        </div>
      </div>
    </div> 
  )
}

export default ContactPage