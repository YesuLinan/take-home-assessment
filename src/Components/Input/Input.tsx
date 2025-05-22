import React from 'react'

interface InputProps {
  type?: 'text' | 'number' | 'file',
  maxLength?: number,
  placeholder?: string,
  title: string,
  onChange: () => void
}

const Input: React.FC<InputProps> = ({type, maxLength, placeholder, title, onChange}) => {
  return (
    <>
      <div>
         <span>{title}</span>
      </div>
      <label>
        <input
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          className={`
            border border-gray-300 rounded-md p-2 w-full
            focus:outline-none focus:ring-2 focus:ring-blue-400
            transition-colors duration-200
          `}
          onChange={onChange}
        />
      </label>
    </>
  )
}

export default Input