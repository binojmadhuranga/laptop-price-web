import React, { useState } from 'react'
import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { InputField } from '../components/form/InputField'
import { SelectField } from '../components/form/SelectField'
import { SubmitButton } from '../components/form/SubmitButton'
import { Loader } from '../components/loader/Loader'
import { predictLaptopPrice } from '../services/api'
import type { PredictionRequest } from '../types/PredictionRequest'

interface LaptopData {
  ram: string
  weight: string
  touchscreen: string
  ips: string
  company: string
  laptopType: string
  os: string
  cpu: string
  gpu: string
}

export const PredictionDashboard: React.FC = () => {
  const [formData, setFormData] = useState<LaptopData>({
    ram: '',
    weight: '',
    touchscreen: '',
    ips: '',
    company: '',
    laptopType: '',
    os: '',
    cpu: '',
    gpu: ''
  })

  const [predictedPrice, setPredictedPrice] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const companyOptions = [
    { value: 'Asus', label: 'Asus' },
    { value: 'Dell', label: 'Dell' },
    { value: 'MSI', label: 'MSI' },
    { value: 'Lenovo', label: 'Lenovo' },
    { value: 'Apple', label: 'Apple' },
    { value: 'HP', label: 'HP' },
    { value: 'Chuwi', label: 'Chuwi' },
    { value: 'Acer', label: 'Acer' },
    { value: 'Razer', label: 'Razer' }
  ]

  const laptopTypeOptions = [
    { value: 'Ultrabook', label: 'Ultrabook' },
    { value: 'Netbook', label: 'Netbook' },
    { value: 'Gaming', label: 'Gaming' },
    { value: '2 in 1 Convertible', label: '2 in 1 Convertible' },
    { value: 'Workstation', label: 'Workstation' }
  ]

  const osOptions = [
    { value: 'macOS', label: 'macOS' },
    { value: 'No OS', label: 'No OS' },
    { value: 'Windows 10', label: 'Windows 10' },
    { value: 'Mac OS X', label: 'Mac OS X' },
    { value: 'Linux', label: 'Linux' },
    { value: 'Android', label: 'Android' },
    { value: 'Windows 10 S', label: 'Windows 10 S' },
    { value: 'Chrome OS', label: 'Chrome OS' },
    { value: 'Windows 7', label: 'Windows 7' }
  ]

  const cpuOptions = [
    { value: 'intelcorei3', label: 'Intel Core i3' },
    { value: 'intelcorei5', label: 'Intel Core i5' },
    { value: 'intelcorei7', label: 'Intel Core i7' },
    { value: 'intelcorei9', label: 'Intel Core i9' },
    { value: 'amdryzen3', label: 'AMD Ryzen 3' },
    { value: 'amdryzen5', label: 'AMD Ryzen 5' },
    { value: 'amdryzen7', label: 'AMD Ryzen 7' }
  ]

  const gpuOptions = [
    { value: 'Intel', label: 'Intel' },
    { value: 'AMD', label: 'AMD' },
    { value: 'Nvidia', label: 'Nvidia' }
  ]

  const booleanOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setPredictedPrice(null)
    
    try {
      // Map form data to API request format
      const requestData: PredictionRequest = {
        ram: parseInt(formData.ram),
        weight: parseFloat(formData.weight),
        company: formData.company.toLowerCase(),
        typename: formData.laptopType.toLowerCase().replace(' ', ''),
        opsys: formData.os.toLowerCase().replace(/\s+/g, ''),
        cpu: formData.cpu.toLowerCase(),
        gpu: formData.gpu.toLowerCase(),
        touchscreen: formData.touchscreen === 'Yes' ? 1 : 0,
        ips: formData.ips === 'Yes' ? 1 : 0
      }
      
      console.log('Request Data:', requestData)
      
      // Add 1 second minimum delay for better UX
      const [response] = await Promise.all([
        predictLaptopPrice(requestData),
        new Promise(resolve => setTimeout(resolve, 1000))
      ])
      
      if (response.success && response.prediction) {
        setPredictedPrice(response.prediction)
      } else {
        setError(response.error || 'Failed to get prediction')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setFormData({
      ram: '',
      weight: '',
      touchscreen: '',
      ips: '',
      company: '',
      laptopType: '',
      os: '',
      cpu: '',
      gpu: ''
    })
    setPredictedPrice(null)
    setError(null)
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50'>
      <Container>
        <Header 
          title='Laptop Price Predictor' 
          subtitle='Enter laptop specifications to get an estimated price'
        />
        
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {/* Form Section */}
            <div className='lg:col-span-2'>
              <div className='p-8 transition-shadow duration-300 bg-white shadow-xl hover:shadow-2xl rounded-2xl backdrop-blur-sm bg-opacity-95'>
                <div className='flex items-center mb-6 space-x-3'>
                  <div className='flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                    </svg>
                  </div>
                  <h2 className='text-2xl font-semibold text-gray-800'>
                    Laptop Specifications
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                    {/* RAM Input */}
                    <InputField
                      label='RAM (GB)'
                      name='ram'
                      type='number'
                      value={formData.ram}
                      onChange={handleInputChange}
                      placeholder='e.g., 8'
                      required
                      min={2}
                      max={128}
                    />

                    {/* Weight Input */}
                    <InputField
                      label='Weight (kg)'
                      name='weight'
                      type='number'
                      value={formData.weight}
                      onChange={handleInputChange}
                      placeholder='e.g., 1.5'
                      required
                      min={0.5}
                      max={5}
                      step={0.1}
                    />

                    {/* Touchscreen */}
                    <SelectField
                      label='Touchscreen'
                      name='touchscreen'
                      value={formData.touchscreen}
                      onChange={handleInputChange}
                      options={booleanOptions}
                      required
                    />

                    {/* IPS Display */}
                    <SelectField
                      label='IPS Display'
                      name='ips'
                      value={formData.ips}
                      onChange={handleInputChange}
                      options={booleanOptions}
                      required
                    />

                    {/* Company */}
                    <SelectField
                      label='Company'
                      name='company'
                      value={formData.company}
                      onChange={handleInputChange}
                      options={companyOptions}
                      required
                    />

                    {/* Laptop Type */}
                    <SelectField
                      label='Laptop Type'
                      name='laptopType'
                      value={formData.laptopType}
                      onChange={handleInputChange}
                      options={laptopTypeOptions}
                      required
                    />

                    {/* Operating System */}
                    <SelectField
                      label='Operating System'
                      name='os'
                      value={formData.os}
                      onChange={handleInputChange}
                      options={osOptions}
                      required
                    />

                    {/* CPU */}
                    <SelectField
                      label='CPU'
                      name='cpu'
                      value={formData.cpu}
                      onChange={handleInputChange}
                      options={cpuOptions}
                      required
                    />

                    {/* GPU */}
                    <SelectField
                      label='GPU'
                      name='gpu'
                      value={formData.gpu}
                      onChange={handleInputChange}
                      options={gpuOptions}
                      required
                    />
                  </div>

                  <div className='flex gap-4 pt-4'>
                    <SubmitButton type='submit' disabled={isLoading}>
                      {isLoading ? (
                        <span className='flex items-center justify-center'>
                          <svg className='w-5 h-5 mr-2 animate-spin' fill='none' viewBox='0 0 24 24'>
                            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                            <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                          </svg>
                          Thinking...
                        </span>
                      ) : (
                        'Predict Price'
                      )}
                    </SubmitButton>
                    <button
                      type='button'
                      onClick={handleReset}
                      className='px-6 py-3 font-semibold text-gray-700 transition-colors duration-200 border border-gray-300 rounded-lg hover:bg-gray-50'
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Prediction Result Section */}
            <div className='lg:col-span-1'>
              <div className='sticky p-8 transition-shadow duration-300 bg-white shadow-xl hover:shadow-2xl rounded-2xl backdrop-blur-sm bg-opacity-95 top-8'>
                <div className='flex items-center mb-6 space-x-3'>
                  <div className='flex items-center justify-center w-10 h-10 rounded-lg bg-linear-to-br from-green-500 to-emerald-600'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <h2 className='text-2xl font-semibold text-gray-800'>
                    Price Prediction
                  </h2>
                </div>
                
                {error && (
                  <div className='p-4 mb-4 border border-red-200 rounded-lg bg-red-50 animate-fade-in'>
                    <div className='flex items-start'>
                      <svg className='w-5 h-5 mt-0.5 mr-2 text-red-600' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clipRule='evenodd' />
                      </svg>
                      <p className='text-sm text-red-800'>
                        <span className='font-semibold'>Error:</span> {error}
                      </p>
                    </div>
                  </div>
                )}
                
                {isLoading ? (
                  <Loader message='Thinking' />
                ) : predictedPrice !== null ? (
                  <div className='space-y-4 animate-fade-in'>
                    <div className='relative p-6 overflow-hidden text-white rounded-lg shadow-lg bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500'>
                      <div className='absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16 bg-white rounded-full opacity-10'></div>
                      <div className='absolute bottom-0 left-0 w-24 h-24 transform -translate-x-12 translate-y-12 bg-white rounded-full opacity-10'></div>
                      <div className='relative'>
                        <p className='flex items-center mb-2 text-sm tracking-wide uppercase'>
                          <svg className='w-4 h-4 mr-2' fill='currentColor' viewBox='0 0 20 20'>
                            <path d='M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z' />
                            <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z' clipRule='evenodd' />
                          </svg>
                          Estimated Price
                        </p>
                        <p className='text-5xl font-bold tracking-tight'>${predictedPrice.toFixed(2)}</p>
                      </div>
                    </div>
                    
                    <div className='p-4 border border-blue-200 rounded-lg bg-blue-50'>
                      <div className='flex items-start'>
                        <svg className='w-5 h-5 mt-0.5 mr-2 text-blue-600' fill='currentColor' viewBox='0 0 20 20'>
                          <path fillRule='evenodd' d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z' clipRule='evenodd' />
                        </svg>
                        <p className='text-sm text-blue-800'>
                          <span className='font-semibold'>Note:</span> This is an estimated price based on the specifications provided.
                        </p>
                      </div>
                    </div>

                    {/* Specifications Summary */}
                    <div className='pt-4 space-y-2'>
                      <h3 className='flex items-center mb-3 font-semibold text-gray-700'>
                        <svg className='w-5 h-5 mr-2 text-indigo-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' />
                        </svg>
                        Your Configuration
                      </h3>
                      <div className='p-4 space-y-2 text-sm bg-gray-50 rounded-lg'>
                        {formData.company && (
                          <div className='flex items-center py-1'>
                            <span className='w-2 h-2 mr-2 rounded-full bg-indigo-500'></span>
                            <span className='font-medium text-gray-700'>Company:</span>
                            <span className='ml-auto text-gray-600'>{formData.company}</span>
                          </div>
                        )}
                        {formData.laptopType && (
                          <div className='flex items-center py-1'>
                            <span className='w-2 h-2 mr-2 rounded-full bg-indigo-500'></span>
                            <span className='font-medium text-gray-700'>Type:</span>
                            <span className='ml-auto text-gray-600'>{formData.laptopType}</span>
                          </div>
                        )}
                        {formData.ram && (
                          <div className='flex items-center py-1'>
                            <span className='w-2 h-2 mr-2 rounded-full bg-indigo-500'></span>
                            <span className='font-medium text-gray-700'>RAM:</span>
                            <span className='ml-auto text-gray-600'>{formData.ram} GB</span>
                          </div>
                        )}
                        {formData.weight && (
                          <div className='flex items-center py-1'>
                            <span className='w-2 h-2 mr-2 rounded-full bg-indigo-500'></span>
                            <span className='font-medium text-gray-700'>Weight:</span>
                            <span className='ml-auto text-gray-600'>{formData.weight} kg</span>
                          </div>
                        )}
                        {formData.cpu && (
                          <div className='flex items-center py-1'>
                            <span className='w-2 h-2 mr-2 rounded-full bg-indigo-500'></span>
                            <span className='font-medium text-gray-700'>CPU:</span>
                            <span className='ml-auto text-gray-600'>{formData.cpu}</span>
                          </div>
                        )}
                        {formData.gpu && (
                          <div className='flex items-center py-1'>
                            <span className='w-2 h-2 mr-2 rounded-full bg-indigo-500'></span>
                            <span className='font-medium text-gray-700'>GPU:</span>
                            <span className='ml-auto text-gray-600'>{formData.gpu}</span>
                          </div>
                        )}
                        {formData.os && (
                          <div className='flex items-center py-1'>
                            <span className='w-2 h-2 mr-2 rounded-full bg-indigo-500'></span>
                            <span className='font-medium text-gray-700'>OS:</span>
                            <span className='ml-auto text-gray-600'>{formData.os}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className='py-12 text-center'>
                    <div className='flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full'>
                      <svg className='w-12 h-12 text-gray-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' />
                      </svg>
                    </div>
                    <p className='text-gray-500'>Fill in the form to get a price prediction</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}