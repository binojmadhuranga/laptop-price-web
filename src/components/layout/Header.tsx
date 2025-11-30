import React from 'react'

interface HeaderProps {
  title: string
  subtitle?: string
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className='text-center mb-12'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
        {title}
      </h1>
      {subtitle && (
        <p className='text-lg text-gray-600'>
          {subtitle}
        </p>
      )}
    </header>
  )
}