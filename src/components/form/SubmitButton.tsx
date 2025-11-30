import React from 'react'

interface SubmitButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = 'submit'
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed'
    >
      {children}
    </button>
  )
}