import React from 'react'
import ContactPage from './ContactPage'
import PopupContainer from '../../Components/Popup/PopupContainer'

const ContactPageContainer = () => {

  const [isPopupOpen, setIsPopupOpen] = React.useState(false)
  const contactCards = [
    {
      id: 1,
      name: 'John Doe',
      dateOfBirth: new Date('1990-01-01'),
    },
    {
      id: 2,
      name: 'Jane Smith',
      dateOfBirth: new Date('1992-02-02'),
    },
  ]

  const handleContactClick = () => {
    // Logic to handle contact cards
  }

  return (
    <>
      <ContactPage 
      onOpenPopup={() => setIsPopupOpen(true)}
      contact={contactCards}
      />
      {isPopupOpen && (
        <PopupContainer 
        onClose={() => setIsPopupOpen(false)} // close when clicking outside popup
        />
      )}
   </>
  )
}

export default ContactPageContainer