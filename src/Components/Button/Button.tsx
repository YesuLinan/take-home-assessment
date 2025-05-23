import React from 'react'

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({text, onClick}) => {
  return (
     <button
      type="button"
      className={`
         bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75
        disabled:bg-blue-300 disabled:cursor-not-allowed
        transition-colors duration-200
        w-full sm:w-auto
      `}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button