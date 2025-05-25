import React from 'react'
import type { InputChangeEvent } from '../../Types/types'


interface InputProps {
  type?: 'text' | 'number' | 'file' | 'date',
  maxLength?: number,
  placeholder?: string,
  title: string,
  value?: string | number,
  maxDate?: string,
  onChange: (e: InputChangeEvent) => void
}

const Input: React.FC<InputProps> = ({type, maxLength, placeholder, title, value, maxDate, onChange}) => {
  return (
    <div className="space-y-1 sm:space-y-2">
      <span className="text-sm sm:text-base font-medium text-gray-700">{title}</span>
      <label className="block">
        <input
          className={`
            border border-gray-300 rounded-md p-2 sm:p-3 w-full
            text-sm sm:text-base
            focus:outline-none focus:ring-2 focus:ring-blue-400
            transition-colors duration-200
          `}
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          max={maxDate}
        />
      </label>
    </div>
  )
}

export default Input
