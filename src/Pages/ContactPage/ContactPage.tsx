import React from "react";
import ButtonContainer from "../../Components/Button/ButtonContainer";
import ContactCardContainer from "../../Components/ContactCard/ContactCardContainer";
import type { Contact } from "../../Types/types";

interface ContactPageProps {
  contact: Contact[];
  onOpenPopup: () => void;
  onContactClick: (contact: Contact) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({
  contact,
  onOpenPopup,
  onContactClick,
}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10 flex justify-center">
      <div className="w-full max-w-4xl bg-blue-100 flex flex-col shadow-md rounded-lg">
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 md:py-6">
          <h1 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-0">
            Contacts
          </h1>
          <ButtonContainer
            text={"Add Contact"}
            onClick={onOpenPopup}
          />
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 lg:px-10 pb-6 sm:pb-8 md:pb-10">
          {contact.length === 0 ? (
            <div className="text-center py-6 sm:py-8 md:py-10">
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                No contacts available. Start by adding one!
              </p>
            </div>
          ) : (
            contact.map((contact, i) => (
              <ContactCardContainer
                key={i}
                contact={contact}
                onClick={() => onContactClick(contact)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
