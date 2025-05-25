import React from "react";
import InputContainer from "../Input/InputContainer";
import type { Contact, InputChangeEvent } from "../../Types/types";
import Button from "../Button/Button";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import FileInputContainer from "../Input/FileInputContainer";

interface ContactPopupProps {
  name: string;
  lastContactDate: string;
  previewImage?: string | null;
  isLoading: boolean;
  isEditMode: boolean;
  onClose: () => void;
  onSubmit: () => void;
  onDelete: () => void;
  setName: (name: string) => void;
  setlastContactDate: (date: string) => void;
  handleFileChange: (event: InputChangeEvent) => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({
  name,
  lastContactDate: lastContactDate,
  previewImage,
  isLoading,
  isEditMode,
  onClose,
  onSubmit,
  onDelete,
  setName,
  setlastContactDate,
  handleFileChange,
}) => {
  return (
    // Blackout background with some transparency (backdrop-filter for blur + bg opacity)
    <div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
      onClick={onClose} // close when clicking outside popup
    >
      <div
        className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-[95%] sm:max-w-md max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // prevent close on popup click
      >
        {isLoading && <LoadingSpinner />}
        <h2 className="text-lg sm:text-xl font-semibold text-center mb-4 sm:mb-6">
          {isEditMode ? "Editing Contact" : "Adding Contact"}
        </h2>

        <div className="space-y-4 sm:space-y-6">
          <InputContainer
            title={"Contact Name"}
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            maxLength={50}
          />

          <FileInputContainer
            previewImage={previewImage}
            handleFileChange={handleFileChange}
          />

          <InputContainer
            title={"Last Contact Date"}
            type="date"
            value={lastContactDate} // format date to YYYY-MM-DD
            onChange={(e: any) => setlastContactDate(e.target.value)}
          />

          <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
            <Button
              text={isEditMode ? "Update Contact" : "Add Contact"}
              onClick={onSubmit}
              disabled={isLoading}
            />
            {isEditMode && (
              <Button
                text="Delete Contact"
                onClick={onDelete}
                disabled={isLoading}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
