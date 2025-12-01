import React from 'react'

interface LoaderProps {
  message?: string
}

export const Loader: React.FC<LoaderProps> = ({ message = 'Thinking...' }) => {
  return (
    <div className='flex flex-col items-center justify-center py-12'>
      {/* Animated Brain Icon */}
      <div className='relative mb-6'>
        {/* Outer Pulse Circle */}
        <div className='absolute inset-0 bg-indigo-400 rounded-full opacity-20 animate-ping'></div>
        
        {/* Main Circle with Gradient */}
        <div className='relative flex items-center justify-center w-24 h-24 rounded-full shadow-lg bg-linear-to-br from-indigo-500 to-purple-600'>
          {/* Brain/CPU Icon */}
          <svg 
            className='w-12 h-12 text-white animate-pulse' 
            fill='none' 
            stroke='currentColor' 
            viewBox='0 0 24 24'
            style={{ animationDuration: '1.5s' }}
          >
            <path 
              strokeLinecap='round' 
              strokeLinejoin='round' 
              strokeWidth={2} 
              d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' 
            />
          </svg>
          
          {/* Orbiting Dots */}
          <div className='absolute inset-0'>
            <div className='absolute w-2 h-2 bg-white rounded-full top-2 left-1/2 animate-spin' style={{ animationDuration: '2s' }}></div>
          </div>
        </div>
      </div>
      
      {/* Animated Text */}
      <div className='flex items-center space-x-2'>
        <p className='text-lg font-semibold text-indigo-600 animate-pulse'>
          {message}
        </p>
        <div className='flex space-x-1'>
          <span className='w-2 h-2 bg-indigo-600 rounded-full animate-bounce' style={{ animationDelay: '0ms' }}></span>
          <span className='w-2 h-2 bg-indigo-600 rounded-full animate-bounce' style={{ animationDelay: '150ms' }}></span>
          <span className='w-2 h-2 bg-indigo-600 rounded-full animate-bounce' style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className='w-64 h-1 mt-4 overflow-hidden bg-gray-200 rounded-full'>
        <div className='h-full rounded-full bg-linear-to-r from-indigo-500 to-purple-600 animate-pulse' style={{ width: '100%' }}></div>
      </div>
    </div>
  )
}