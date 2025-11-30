import React, { useState } from 'react'
import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { InputField } from '../components/form/InputField'
import { SelectField } from '../components/form/SelectField'
import { SubmitButton } from '../components/form/SubmitButton'

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // TODO: Implement API call to backend for prediction
    console.log('Form Data:', formData)
    
    // Mock prediction for now
    const mockPrice = Math.floor(Math.random() * 2000) + 500
    setPredictedPrice(mockPrice)
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
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-blue-50 to-indigo-100'>
      <Container>
        <Header 
          title='Laptop Price Predictor' 
          subtitle='Enter laptop specifications to get an estimated price'
        />
        
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {/* Form Section */}
            <div className='lg:col-span-2'>
              <div className='p-8 bg-white shadow-xl rounded-2xl'>
                <h2 className='mb-6 text-2xl font-semibold text-gray-800'>
                  Laptop Specifications
                </h2>
                
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
                    <SubmitButton type='submit'>
                      Predict Price
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
              <div className='sticky p-8 bg-white shadow-xl rounded-2xl top-8'>
                <h2 className='mb-6 text-2xl font-semibold text-gray-800'>
                  Price Prediction
                </h2>
                
                {predictedPrice !== null ? (
                  <div className='space-y-4'>
                    <div className='p-6 text-white rounded-lg bg-linear-to-br from-indigo-500 to-purple-600'>
                      <p className='mb-2 text-sm tracking-wide uppercase'>Estimated Price</p>
                      <p className='text-4xl font-bold'>${predictedPrice.toLocaleString()}</p>
                    </div>
                    
                    <div className='p-4 border border-blue-200 rounded-lg bg-blue-50'>
                      <p className='text-sm text-blue-800'>
                        <span className='font-semibold'>Note:</span> This is an estimated price based on the specifications provided.
                      </p>
                    </div>

                    {/* Specifications Summary */}
                    <div className='pt-4 space-y-2'>
                      <h3 className='mb-3 font-semibold text-gray-700'>Your Configuration:</h3>
                      <div className='space-y-2 text-sm text-gray-600'>
                        {formData.company && <p><span className='font-medium'>Company:</span> {formData.company}</p>}
                        {formData.laptopType && <p><span className='font-medium'>Type:</span> {formData.laptopType}</p>}
                        {formData.ram && <p><span className='font-medium'>RAM:</span> {formData.ram} GB</p>}
                        {formData.weight && <p><span className='font-medium'>Weight:</span> {formData.weight} kg</p>}
                        {formData.cpu && <p><span className='font-medium'>CPU:</span> {formData.cpu}</p>}
                        {formData.gpu && <p><span className='font-medium'>GPU:</span> {formData.gpu}</p>}
                        {formData.os && <p><span className='font-medium'>OS:</span> {formData.os}</p>}
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