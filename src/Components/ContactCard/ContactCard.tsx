import React from "react";
import type { Contact } from "../../Types/Contact";

interface ContactCardProps {
  contact: Contact;
  onClick: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  contact,
  onClick,
}) => {
  return (
    <div
      className="w-full bg-blue-500 flex flex-row shadow-md p-4 rounded-lg 
      justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-row gap-5">
        <img
          src={contact.picture ? URL.createObjectURL(contact.picture) : ""}
          className="contact-card__image"
        />
        <h2 className="contact-card__name">{contact.name}</h2>
      </div>

      <p className="contact-card__dob">
        Date of Birth: {contact.dateOfBirth.toLocaleDateString()}
      </p>
    </div>
  );
};

export default ContactCard;
