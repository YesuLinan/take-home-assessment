import React, { useCallback, useEffect, useState } from "react";
import ContactPage from "./ContactPage";
import { getContacts } from "../../../api/services/contactService";
import type { Contact } from "../../Types/types";
import ContactPopupContainer from "../../Components/ContactPopup/ContactPopupContainer";

const ContactPageContainer = () => {
  const [isAddContactOpen, setIsAddContactOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [contactCards, setContactCards] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = useCallback(async () => {
    try {
      setError(null);
      const contacts = await getContacts();
      setContactCards(contacts);
    } catch (error) {
      setError("Failed to load contacts. Please refresh the page.");
      console.error("Error fetching contacts:", error);
    }
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleContactClick = (contact: Contact) => {
    setSelectedContact(contact);
    setIsAddContactOpen(true);
  };

  const sortedContacts = [...contactCards].sort((a, b) => {
    const dateA = a.lastContactDate
      ? new Date(a.lastContactDate).getTime()
      : Infinity;
    const dateB = b.lastContactDate
      ? new Date(b.lastContactDate).getTime()
      : Infinity;
    return dateA - dateB;
  });

  return (
    <>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <ContactPage
        onOpenPopup={() => {
          setSelectedContact(null);
          setIsAddContactOpen(true);
        }}
        contact={sortedContacts}
        onContactClick={handleContactClick}
      />
      {isAddContactOpen && (
        <ContactPopupContainer
          onClose={() => setIsAddContactOpen(false)}
          onContactAdded={fetchContacts}
          contact={selectedContact ? selectedContact : undefined}
        />
      )}
    </>
  );
};

export default ContactPageContainer;
