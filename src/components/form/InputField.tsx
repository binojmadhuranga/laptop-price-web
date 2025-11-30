import React from 'react'

interface InputFieldProps {
  label: string
  name: string
  type?: 'text' | 'number' | 'email'
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  required?: boolean
  min?: number
  max?: number
  step?: number
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  min,
  max,
  step
}) => {
  return (
    <div className='space-y-2'>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
        {label}
        {required && <span className='text-red-500 ml-1'>*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        step={step}
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors'
      />
    </div>
  )
}