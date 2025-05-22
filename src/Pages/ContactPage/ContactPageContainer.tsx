import React from 'react'
import ContactPage from './ContactPage'
import PopupContainer from '../../Components/Popup/PopupContainer'

const ContactPageContainer = () => {

  const [isPopupOpen, setIsPopupOpen] = React.useState(false)


  return (
    <>
      <ContactPage 
      onOpenPopup={() => setIsPopupOpen(true)}
      />
      {isPopupOpen && (
        <PopupContainer 
        isOpen={isPopupOpen}
        setIsOpen={setIsPopupOpen}
        />
      )}
   </>
  )
}

export default ContactPageContainer