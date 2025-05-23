import React, { useEffect } from "react";
import ContactPage from "./ContactPage";
import PopupContainer from "../../Components/ContactPopup/ContactPopupContainer";
import { getContacts } from "../../../api/services/contactService";
import type { Contact } from "../../Types/types";

const ContactPageContainer = () => {
  const [isAddContactOpen, setIsAddContactOpen] = React.useState(false);
  const [selectedContact, setSelectedContact] = React.useState<Contact | null>(null);
  const [contactCards, setContactCards] = React.useState<Contact[]>([]);

  useEffect(() => {
  const fetchContacts = async () => {
    try {
      console.log("Fetching contacts...");
      const contacts = await getContacts();
      console.log("Contacts fetched:", contacts);
      setContactCards(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  fetchContacts();
}, []);

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
    setIsAddContactOpen(true);
  };

  return (
    <>
      <ContactPage
        onOpenPopup={() => {
          setSelectedContact(null);
          setIsAddContactOpen(true);
        }}
        contact={contactCards}
        onContactClick={handleContactClick}
      />
      {isAddContactOpen && (
        <PopupContainer
          onClose={() => setIsAddContactOpen(false)}
          contact={selectedContact ? selectedContact : undefined}
        />
      )}
    </>
  );
};

export default ContactPageContainer;