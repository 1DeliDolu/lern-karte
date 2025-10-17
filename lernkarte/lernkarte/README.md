# Lernkarte Project

## Overview
Lernkarte is a Next.js application designed to provide an interactive learning experience. This project structure includes components, styles, and TypeScript support to enhance development efficiency and maintainability.

## Project Structure
```
lernkarte
├── src
│   ├── app
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── components
│   │   └── Header.tsx
│   ├── styles
│   │   └── globals.css
│   └── types
│       └── index.ts
├── public
├── next.config.ts
├── next-env.d.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 14 or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd lernkarte
   ```
3. Install the dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
or
```
yarn dev
```
Open your browser and go to `http://localhost:3000` to view the application.

### Building for Production
To create an optimized production build, run:
```
npm run build
```
or
```
yarn build
```

### License
This project is licensed under the MIT License. See the LICENSE file for more details.