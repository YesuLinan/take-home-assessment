import React from "react";
import InputContainer from "../Input/InputContainer";
import type { Contact, InputChangeEvent } from "../../Types/types";

interface ContactPopupProps {
  name: string;
  dateOfBirth: string;
  contact?: Contact;
  onClose: () => void;
  isEditMode: boolean;
  onSubmit: () => void;
  onDelete: () => void;
  setName: (name: string) => void;
  setDateOfBirth: (date: string) => void;
  setPicture: (picture: File | null) => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({
  name,
  dateOfBirth,
  contact,
  onClose,
  isEditMode,
  onSubmit,
  onDelete,
  setName,
  setDateOfBirth,
  setPicture,
}) => {
  return (
    // Blackout background with some transparency (backdrop-filter for blur + bg opacity)
    <div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose} // close when clicking outside popup
    >
      <div
        className="bg-white rounded-lg shadow-lg p-4 max-w-md mx-4 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // prevent close on popup click
      >
        <InputContainer
          title={"Name"}
          value={name}
          onChange={(e: any) => setName(e.target.value)}
          maxLength={50}
        />

        <InputContainer
          title={"Picture"}
          type="file"
          onChange={(e: InputChangeEvent) => {
            const file = e.target.files && e.target.files[0];
            setPicture(file ?? null);
          }}
        />

        <InputContainer
          title={"Date of Birth"}
          type="date"
          value={dateOfBirth} // format date to YYYY-MM-DD
          onChange={(e: any) => setDateOfBirth(e.target.value)}
        />

        <div className="flex flex-row justify-center items-center gap-5">
          <button onClick={onSubmit}>
            {isEditMode ? "Update Contact" : "Add Contact"}
          </button>
          {isEditMode && <button onClick={onDelete}>{"Delete Contact"}</button>}
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
