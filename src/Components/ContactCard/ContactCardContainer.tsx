import React from "react";
import ContactCard from "./ContactCard";
import type { Contact } from "../../Types/Contact";


interface ContactCardContainerProps {
  contact: Contact,
  onClick: () => void;
}

const ContactCardContainer: React.FC<ContactCardContainerProps> = ({
  contact,
  onClick
}) => {

  return (
  <ContactCard 
  contact={contact}
  onClick={onClick}/>
  )
};

export default ContactCardContainer;
