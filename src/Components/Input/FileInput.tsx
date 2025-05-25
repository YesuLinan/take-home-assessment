import React from "react";
import type { InputChangeEvent } from "../../Types/types";
import Button from "../Button/Button";

interface FileInputProps {
  previewImage: string | null | undefined;
  handleFileChange: (event: InputChangeEvent) => void;
}

const FileInput: React.FC<FileInputProps> = ({
  previewImage,
  handleFileChange,
}) => {
  return (
    <div className="mb-4 sm:mb-6">
      <label className="block text-sm sm:text-base font-medium text-gray-700 mb-2 sm:mb-3">
        Profile Picture
      </label>
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <div className="relative">
          <img
            src={previewImage || "/anonymous.jpg"}
            alt="Preview"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-gray-200"
          />
        </div>
        <div className="w-full sm:w-auto">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <Button
            text="Choose Image"
            onClick={() => document.getElementById("fileInput")?.click()}
          />
        </div>
      </div>
    </div>
  );
};

export default FileInput;
