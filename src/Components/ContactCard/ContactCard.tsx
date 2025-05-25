import React from "react";
import type { Contact } from "../../Types/types";

interface ContactCardProps {
  contact: Contact;
  onClick: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact, onClick }) => {
  return (
    <div
      className="w-full bg-blue-500 flex flex-col sm:flex-row items-start sm:items-center shadow-md p-3 sm:p-4 rounded-lg 
               hover:bg-blue-600 transition-all duration-200 cursor-pointer gap-3 sm:gap-4
               hover:scale-[1.01] hover:shadow-lg"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
        {typeof contact.picture === "string" ? (
          <img
            src={contact.picture}
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover aspect-square"
            alt={`${contact.name}'s picture`}
          />
        ) : null}

        <h2 className="text-white font-semibold text-base sm:text-lg md:text-xl truncate">{contact?.name}</h2>
      </div>

      <p className="text-white text-xs sm:text-sm md:text-base ml-auto whitespace-nowrap
                   sm:pl-4 border-t sm:border-t-0 border-white/20 pt-2 sm:pt-0 w-full sm:w-auto
                   text-center sm:text-left">
        Last Contact Date: {contact?.lastContactDate?.toLocaleDateString()}
      </p>
    </div>
  );
};

export default ContactCard;