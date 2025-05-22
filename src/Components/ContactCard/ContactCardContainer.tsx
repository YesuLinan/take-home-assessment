import React from "react";
import ContactCard from "./ContactCard";

interface ContactCardContainerProps {
  picture?: File;
  name: string;
  dateOfBirth: Date;
}

const ContactCardContainer: React.FC<ContactCardContainerProps> = ({
  picture,
  name,
  dateOfBirth,
}) => {
  return (
  <ContactCard 
  picture={picture}
  name={name}
  dateOfBirth={dateOfBirth} />
  )
};

export default ContactCardContainer;
