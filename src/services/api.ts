import type { PredictionRequest } from '../types/PredictionRequest'
import type { PredictionResponse } from '../types/PredictionResponse'

const API_BASE_URL = 'http://localhost:8080/api'

export const predictLaptopPrice = async (
  data: PredictionRequest
): Promise<PredictionResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: PredictionResponse = await response.json()
    return result
  } catch (error) {
    console.error('Error predicting laptop price:', error)
    return {
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      prediction: 0,
      success: false,
    }
  }
}

export default {
  predictLaptopPrice,
}