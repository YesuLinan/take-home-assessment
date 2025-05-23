import React from 'react'
import Input from './Input'
import type { InputChangeEvent } from '../../Types/types'

interface InputContainerProps {
  type?: 'text' | 'number' | 'file' | 'date',
  maxLength?: number,
  placeholder?: string,
  title: string,
  value?: string | number,
  onChange:  (e: InputChangeEvent) => void
}

const InputContainer: React.FC<InputContainerProps> = ({type, maxLength, placeholder, title, value, onChange}) => {

  return (
   <Input 
    type={type}
    maxLength={maxLength}
    placeholder={placeholder}
    title={title}
    value={value} // value is not passed in the props
    onChange={onChange}
   />
  )
}

export default InputContainer
