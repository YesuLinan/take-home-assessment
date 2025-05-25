import React, { useEffect, useState } from "react";
import ContactPopup from "./ContactPopup";
import type { Contact, InputChangeEvent } from "../../Types/types";
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
  onContactAdded,
}) => {
  const [name, setName] = useState("");
  const [lastContactDate, setlastContactDate] = useState("");
  const [picture, setPicture] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const anonymousImage = "/anonymous.jpg";

  // Handle image preview
  useEffect(() => {
    if (picture) {
      const objectUrl = URL.createObjectURL(picture);
      setPreviewImage(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [picture]);

  // Pre-fill values if editing
  useEffect(() => {

    if (contact) {
      setName(contact.name);
      setlastContactDate(contact?.lastContactDate?.toISOString().split("T")[0]);
      if (contact.picture) {
        setPreviewImage(contact.picture);
      }
    }
  }, [contact]);

  const isEditMode = !!contact;

  const handleSubmit = async () => {
    
  if (!name.trim()) {
    alert("Name is required");
    return;
  }

  if (!previewImage && !isEditMode) { // New contacts must have image
    alert("Profile picture is required");
    return;
  }

  if (!lastContactDate) {
    alert("Last contact date is required");
    return;
  }
  

  setIsLoading(true);
    try {
      let pictureUrl: string;

      // If editing and picture is already a URL, retain it
      if (contact && typeof contact.picture === "string" && !picture) {
        pictureUrl = contact.picture;
      } else {
        if (!picture) {
          throw new Error("Profile picture file is missing.");
        }
        pictureUrl = await uploadImage(picture); // Cloudinary upload
        console.log("Uploaded image URL:", pictureUrl);
      } 

      const contactToSubmit: Omit<Contact, "id"> = {
        name,
        lastContactDate: new Date(lastContactDate),
        picture: pictureUrl,
      };

      if (isEditMode && contact) {
        await updateContact({ ...contactToSubmit, id: contact.id });
      } else {
        await addContact(contactToSubmit);
      }

      onContactAdded && (await onContactAdded());
      onClose();
    } catch (error) {
      console.error("Error submitting contact:", error);
      alert("There was an error saving the contact.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsLoading(true);

    if (contact) {
      try {
        await deleteContact(contact.id);
        onContactAdded && (await onContactAdded());
        onClose();
      } catch (error) {
        console.error("Error deleting contact:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleFileChange = (e: InputChangeEvent) => {
    const file = e.target.files?.[0];
    if (file) {
      setPicture(file);
    }
  };

  console.log("type of picture", typeof previewImage);

  return (
    <ContactPopup
      name={name}
      lastContactDate={lastContactDate}
      onClose={onClose}
      isEditMode={isEditMode}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      setName={setName}
      setlastContactDate={setlastContactDate}
      handleFileChange={handleFileChange}
      previewImage={previewImage}
      isLoading={isLoading}
    />
  );
};

export default ContactPopupContainer;
