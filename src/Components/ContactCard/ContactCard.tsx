import React from "react";
import type { Contact } from "../../Types/types";

interface ContactCardProps {
  contact: Contact;
  onClick: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onClick }) => {
  return (
    <div
      className="w-full bg-blue-500 flex flex-row shadow-md p-4 rounded-lg 
      justify-between items-center cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-row gap-5 items-center justify-center">
        {contact.picture instanceof File ? (
          <img
            src={URL.createObjectURL(contact.picture)}
            className="w-16 h-16 rounded-full object-cover"
            alt={`${contact.name}'s picture`}
          />
        ) : typeof contact.picture === "string" ? (
          <img
            src={contact.picture}
            className="w-16 h-16 rounded-full object-cover"
            alt={`${contact.name}'s picture`}
          />
        ) : null}

        <h2 className="contact-card__name">{contact?.name}</h2>
      </div>

      <p className="contact-card__dob">
        Date of Birth: {contact?.dateOfBirth?.toLocaleDateString()}
      </p>
    </div>
  );
};

export default ContactCard;