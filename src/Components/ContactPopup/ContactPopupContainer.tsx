import React, { useEffect, useState } from "react";
import ContactPopup from "./ContactPopup";
import type { Contact } from "../../Types/types";
import {
  addContact,
  updateContact,
} from "../../../api/services/contactService";

interface ContactPopupContainerProps {
  contact?: Contact;
  onClose: () => void;
  onContactAdded?: () => void;
}

const ContactPopupContainer: React.FC<ContactPopupContainerProps> = ({
  contact,
  onClose,
  onContactAdded
}) => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [picture, setPicture] = useState<File | null>(null);

  // Pre-fill values if editing
  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setDateOfBirth(contact?.dateOfBirth?.toISOString().split("T")[0]);
    }
  }, [contact]);

  const isEditMode = !!contact;

  const handleSubmit = async () => {
    const contactToSubmit: Omit<Contact, "id"> = {
      name,
      dateOfBirth: new Date(dateOfBirth),
      picture: picture ?? undefined,
    };

    try {
      if (isEditMode && contact) {
        await updateContact({ ...contactToSubmit, id: contact.id });
      } else {
        await addContact(contactToSubmit);
      }
      // Call this to refresh the list in the parent container
      onContactAdded && await onContactAdded();

      onClose();
    } catch (error) {
      console.error("Error submitting contact:", error);
    }
  };
  return (
    <ContactPopup
      onClose={onClose}
      contact={contact} // close when clicking outside popup
      isEditMode={isEditMode}
      onSubmit={handleSubmit} // close when clicking outside popup
      setName={setName}
      setDateOfBirth={setDateOfBirth}
      setPicture={setPicture}
    />
  );
};

export default ContactPopupContainer;