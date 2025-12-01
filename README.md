# 💻 Laptop Price Predictor

A modern, responsive web application built with React and TypeScript that predicts laptop prices based on hardware specifications using machine learning. Features an intuitive UI with real-time price predictions.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)

## ✨ Features

- 🎨 **Modern UI/UX** - Beautiful gradient designs with smooth animations
- 📱 **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- ⚡ **Real-time Predictions** - Instant laptop price predictions via REST API
- 🎯 **Comprehensive Inputs** - Support for 9+ laptop specifications:
  - RAM (2-128 GB)
  - Weight (0.5-5 kg)
  - Touchscreen (Yes/No)
  - IPS Display (Yes/No)
  - Company (Asus, Dell, MSI, Lenovo, Apple, HP, Chuwi, Acer, Razer)
  - Laptop Type (Ultrabook, Netbook, Gaming, 2-in-1 Convertible, Workstation)
  - Operating System (macOS, Windows, Linux, Chrome OS, etc.)
  - CPU (Intel Core i3/i5/i7/i9, AMD Ryzen 3/5/7)
  - GPU (Intel, AMD, Nvidia)
- 🔄 **Loading Animations** - Engaging "Thinking" loader with smooth transitions
- ✅ **Form Validation** - Built-in validation for all input fields
- 📊 **Configuration Summary** - Real-time display of selected specifications
- 🎭 **Error Handling** - Graceful error messages with user-friendly feedback

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.2.0** - Modern UI library with latest features
- **TypeScript 5.9.3** - Type-safe development
- **Vite 7.2.4** - Lightning-fast build tool and dev server

### Styling
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **PostCSS 8.5.6** - CSS transformations
- **Autoprefixer 10.4.22** - Automatic vendor prefixing

### Code Quality
- **ESLint 9.39.1** - Code linting and style enforcement
- **TypeScript ESLint 8.46.4** - TypeScript-specific linting rules

## 📁 Project Structure

```
laptop-price-web/
├── src/
│   ├── assets/              # Static assets (images, icons)
│   ├── components/
│   │   ├── form/           # Form components
│   │   │   ├── InputField.tsx
│   │   │   ├── SelectField.tsx
│   │   │   └── SubmitButton.tsx
│   │   ├── layout/         # Layout components
│   │   │   ├── Container.tsx
│   │   │   └── Header.tsx
│   │   └── loader/         # Loading components
│   │       └── Loader.tsx
│   ├── pages/              # Page components
│   │   └── PredictionDashboard.tsx
│   ├── services/           # API services
│   │   └── api.ts
│   ├── types/              # TypeScript type definitions
│   │   ├── PredictionRequest.ts
│   │   └── PredictionResponse.ts
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── public/                 # Public assets
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── vite.config.ts         # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- Backend API running on `http://localhost:8080/api/predict`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/binojmadhuranga/laptop-price-web.git
   cd laptop-price-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoint** (if needed)
   
   Edit `src/services/api.ts` to change the API base URL:
   ```typescript
   const API_BASE_URL = 'http://localhost:8080/api'
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production (TypeScript + Vite) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

## 🔌 API Integration

### Endpoint
```
POST http://localhost:8080/api/predict
```

### Request Format
```json
{
  "ram": 16,
  "weight": 1.3,
  "company": "dell",
  "typename": "notebook",
  "opsys": "windows10",
  "cpu": "intelcorei5",
  "gpu": "intel",
  "touchscreen": 1,
  "ips": 1
}
```

### Response Format
```json
{
  "error": null,
  "prediction": 1544.81,
  "success": true
}
```

## 🎨 Component Architecture

### Reusable Components

- **InputField** - Customizable input field with label, validation, and styling
- **SelectField** - Dropdown select field with options
- **SubmitButton** - Styled button with loading state support
- **Container** - Responsive container wrapper
- **Header** - Page header with title and subtitle
- **Loader** - Animated loading indicator with "Thinking" message

### Type Safety

All components are fully typed using TypeScript interfaces:
- `PredictionRequest` - Laptop specification data structure
- `PredictionResponse` - API response structure
- Component props interfaces for type-safe development

## 🎯 Features in Detail

### 1. Smart Form Validation
- Required field validation
- Min/max value constraints for numerical inputs
- Dropdown validation for categorical inputs

### 2. Responsive Design
- Mobile-first approach
- Grid layout adapts to screen size
- Touch-friendly interface

### 3. User Experience
- 1-second minimum loading time for better perceived performance
- Smooth animations and transitions
- Visual feedback for all interactions
- Error messages with clear descriptions

### 4. Performance Optimizations
- Code splitting with Vite
- Optimized bundle size with tree shaking
- Fast HMR (Hot Module Replacement) during development

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is part of an AI/ML laptop price prediction system.

## 👨‍💻 Author

**Binoj Madhuranga**
- GitHub: [@binojmadhuranga](https://github.com/binojmadhuranga)

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vite for the blazing-fast build tool
- TypeScript team for type safety

## 📞 Support

For support, please open an issue in the GitHub repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
