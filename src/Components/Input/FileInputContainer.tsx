import React from 'react'
import type { InputChangeEvent } from '../../Types/types'
import FileInput from './FileInput'

interface FileInputContainerProps {
    previewImage: string | null | undefined,
    handleFileChange: (event: InputChangeEvent) => void
}


const FileInputContainer: React.FC<FileInputContainerProps> = ({previewImage, handleFileChange}) => {
  return (
   <FileInput
   previewImage={previewImage}
   handleFileChange={handleFileChange}
   />
  )
}

export default FileInputContainer