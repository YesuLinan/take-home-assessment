import React from "react";

interface ContactCardProps {
  picture?: File;
  name: string;
  dateOfBirth: Date;
}

const ContactCard: React.FC<ContactCardProps> = ({
  picture,
  name,
  dateOfBirth,
}) => {
  return (
    <div className="w-full bg-blue-500 flex flex-row shadow-md p-4 rounded-lg justify-between items-center">
      <div className="flex flex-row gap-5">
        <img
          src={picture ? URL.createObjectURL(picture) : ""}
          className="contact-card__image"
        />
        <h2 className="contact-card__name">{name}</h2>
      </div>

      <p className="contact-card__dob">
        Date of Birth: {dateOfBirth.toLocaleDateString()}
      </p>
    </div>
  );
};

export default ContactCard;
