import React from "react";
import type { Contact } from "../../Types/types";

interface ContactCardProps {
  contact: Contact;
  onClick: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onClick }) => {
  return (
    <div
      className="w-full bg-blue-500 flex flex-row shadow-md p-4 rounded-lg justify-between items-center cursor-pointer
               hover:bg-blue-600 transition-colors duration-200"
      onClick={onClick}
    >
      <div className="flex flex-row gap-5 items-center">
        {contact.picture instanceof File ? (
          <img
            src={URL.createObjectURL(contact.picture)}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
            alt={`${contact.name}'s picture`}
          />
        ) : typeof contact.picture === "string" ? (
          <img
            src={contact.picture}
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
            alt={`${contact.name}'s picture`}
          />
        ) : null}

        <h2 className="contact-card__name text-white font-semibold text-lg sm:text-xl">{contact?.name}</h2>
      </div>

      <p className="contact-card__dob text-white text-sm sm:text-base">
        Last Contact Date: {contact?.lastContactDate?.toLocaleDateString()}
      </p>
    </div>
  );
};

export default ContactCard;