import React, { useEffect, useState } from "react";
import ContactPopup from "./ContactPopup";
import type { Contact } from "../../Types/types";
import anonymousImage from "../../assets/pictures/anonymous.jpg";
import {
  addContact,
  deleteContact,
  updateContact,
  uploadImage,
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

  console.log("Picture:", picture);

  // Pre-fill values if editing
  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setDateOfBirth(contact?.dateOfBirth?.toISOString().split("T")[0]);
    }
  }, [contact]);

  const isEditMode = !!contact;

 const handleSubmit = async () => {
    if (!name.trim()) {
      alert("Name cannot be empty.");
      return;
    }
    if (!dateOfBirth) {
      alert("Date of birth cannot be empty.");
      return;
    }

    try {
      let pictureUrl: string | undefined = typeof contact?.picture === "string" ? contact.picture : undefined;

      console.log("Picture type:", typeof picture);
      if (picture instanceof File) {
        pictureUrl = await uploadImage(picture);
      } else if (!pictureUrl) {
        pictureUrl = anonymousImage; // fallback here
      }
      console.log("Picture URL:", pictureUrl);

      const contactToSubmit: Omit<Contact, "id"> = {
        name,
        dateOfBirth: new Date(dateOfBirth),
        picture: pictureUrl,
      };

      if (isEditMode && contact) {
        await updateContact({ ...contactToSubmit, id: contact.id });
      } else {
        await addContact(contactToSubmit);
      }

      onContactAdded && await onContactAdded();
      onClose();
    } catch (error) {
      console.error("Error submitting contact:", error);
    }
  };

  const handleDelete = async () => {
    if (contact) { 
      try {
        await deleteContact(contact.id);
        onContactAdded && await onContactAdded();
        onClose();
      } catch (error) {
        console.error("Error deleting contact:", error);
      }
    }
  }

  return (
    <ContactPopup
      name={name}
      dateOfBirth={dateOfBirth}
      onClose={onClose}
      contact={contact}
      isEditMode={isEditMode}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      setName={setName}
      setDateOfBirth={setDateOfBirth}
      setPicture={setPicture}
    />
  );
};

export default ContactPopupContainer;