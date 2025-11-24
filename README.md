# Commission Report Dashboard

A modern React TypeScript application for viewing and managing commission reports with advanced search and pagination capabilities.


## 🎯 Overview

This application provides a comprehensive dashboard for viewing commission reports. It features a clean, responsive UI built with React and Bootstrap, offering real-time search functionality with debouncing, pagination, and secure authentication.

## ✨ Features

- **🔐 Authentication System**: Token-based authentication with protected routes
- **📊 Commission Reports Dashboard**: View detailed commission data in a tabular format
- **🔍 Real-time Search**: Debounced search functionality for filtering by Internal Partner ID
- **📄 Pagination**: Navigate through large datasets with ease
- **⚡ Loading States**: Visual feedback during data fetching
- **🎨 Responsive Design**: Mobile-friendly interface using Bootstrap 5
- **🔔 Toast Notifications**: User-friendly error and success messages
- **🛡️ Type Safety**: Full TypeScript implementation for robust code



## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tik-tok-fe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_BASE_URL=your_api_base_url
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

   The application will open at [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a `.env` file in the root directory with the following variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_BASE_URL` | Backend API base URL | `https://api.example.com` |

## 📜 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- Hot reloading enabled
- Lint errors displayed in console

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.
- Optimized for best performance
- Minified code with hashed filenames
- Ready for deployment

