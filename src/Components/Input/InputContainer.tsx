import React from 'react'
import Input from './Input'
import type { InputChangeEvent } from '../../Types/types'

interface InputContainerProps {
  type?: 'text' | 'number' | 'file' | 'date',
  maxLength?: number,
  placeholder?: string,
  title: string,
  value?: string | number,
  maxDate?: string,
  onChange:  (e: InputChangeEvent) => void
}

const InputContainer: React.FC<InputContainerProps> = ({type, maxLength, placeholder, title, value, maxDate, onChange}) => {

  return (
   <Input 
    type={type}
    maxLength={maxLength}
    placeholder={placeholder}
    title={title}
    value={value}
    maxDate={maxDate}
    onChange={onChange}
   />
  )
}

export default InputContainer
