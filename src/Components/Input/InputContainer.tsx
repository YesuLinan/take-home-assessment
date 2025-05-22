import React from 'react'
import Input from './Input'

interface InputContainerProps {
  type?: 'text' | 'number' | 'file',
  maxLength?: number,
  placeholder?: string,
  title: string,
  onChange:  () => void
}

const InputContainer: React.FC<InputContainerProps> = ({type, maxLength, placeholder, title, onChange}) => {

  return (
   <Input 
    type={type}
    maxLength={maxLength}
    placeholder={placeholder}
    title={title}
    onChange={onChange}
   />
  )
}

export default InputContainer