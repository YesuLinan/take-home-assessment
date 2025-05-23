import React from 'react'
import type { InputChangeEvent } from '../../Types/types'


interface InputProps {
  type?: 'text' | 'number' | 'file' | 'date',
  maxLength?: number,
  placeholder?: string,
  title: string,
  value?: string | number,
  onChange: (e: InputChangeEvent) => void
}

const Input: React.FC<InputProps> = ({type, maxLength, placeholder, title, value, onChange}) => {
  return (
    <>
      <div>
         <span>{title}</span>
      </div>
      <label>
        <input
          className={`
            border border-gray-300 rounded-md p-2 w-full
            focus:outline-none focus:ring-2 focus:ring-blue-400
            transition-colors duration-200
          `}
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          
        />
      </label>
    </>
  )
}

export default Input
