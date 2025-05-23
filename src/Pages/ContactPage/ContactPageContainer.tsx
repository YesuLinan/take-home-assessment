import React from "react";
import ContactPage from "./ContactPage";
import PopupContainer from "../../Components/ContactPopup/ContactPopupContainer";
import type { Contact } from "../../Types/Contact";

const ContactPageContainer = () => {
  const [isAddContactOpen, setIsAddContactOpen] = React.useState(false);
  const [selectedContact, setSelectedContact] = React.useState<{
    contact: Contact
  } | null>(null);
  const contactCards = [
    {
      id: 1,
      name: "John Doe",
      dateOfBirth: new Date("1990-01-01"),
    },
    {
      id: 2,
      name: "Jane Smith",
      dateOfBirth: new Date("1992-02-02"),
    },
  ];

  const handleContactClick = (contact: Contact) => {
    setSelectedContact({ contact });
    setIsAddContactOpen(true);
  };

  return (
    <>
      <ContactPage
        onOpenPopup={() => {
          setSelectedContact(null); // clear for "new" contact
          setIsAddContactOpen(true);
        }}
        contact={contactCards}
        onContactClick={handleContactClick}
      />
      {isAddContactOpen  && (
        <PopupContainer
          onClose={() => setIsAddContactOpen(false)}
          contact={selectedContact?.contact} // close when clicking outside popup
        />
      )}
    </>
  );
};

export default ContactPageContainer;
