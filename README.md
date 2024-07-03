# Blutech Solutions LLC - Front-End Engineer Test Project

This repository contains the implementation of the UI design and API integration as part of the application process for the Remote Front-End Software Engineer position at Blutech Solutions LLC.

## Project Overview

The project consists of two main tasks:

1. **UI Implementation**: Using the provided Figma design.
2. **API Integration**: Integrating with the provided API and managing state using API Context.

## Technologies Used

- **React** (with TypeScript)
- **CSS** and **Bootstrap** for styling

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

```sh
  git clone https://github.com/your-username/blutech-project.git
  cd blutech-project
```

2. **Install dependencies**:

```sh
npm install
# or
yarn install
```

## Running the Project

1. **Start the development server:**

```sh
   npm start
   # or
   yarn start
```

2. Open your browser and navigate to http://localhost:3000 to view the application.

## Project Structure

```sh
blutech-project/
├── public/
├── src/
│   ├── components/
│   ├── contexts/
│   ├── App.css/
│   ├── asset
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── ...
├── index.html
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

- **`components/`**: Contains the React components used in the project.
- **`Contexts/`**: Contains the API Context for state management.
- **`App.css/`**: Contains the main stylesheet.
- **`App.tsx/`**: Main application component.
- **`asset/`**: Contains static assets like images.
- **`main.tsx/`**: Entry point of the application.

## Features

### UI Implementation

The UI is implemented based on the Figma design provided [here](https://www.figma.com/design/5YoDO1EKuVGMJK77g2CY43/Blutech-solution?node-id=425-359&t=fCesi5WRWJUPge5L-0).

### API Integration

- The application fetches data from the API endpoint `http://3.88.1.181:8000/products/public/catalog`.
- The data is managed using API Context and displayed in a data table.

## Setup Instructions

### API Endpoint

The API endpoint used in this project is:

```sh
http://3.88.1.181:8000/products/public/catalog
```

## State Management

State is managed using API Context. The context is set up in `src/contexts/`.

## Styling

CSS and Bootstrap are used for styling. Styles are located in `src/App.css`, `src/index.css.` and inline

## Deployment

To create a production build, run:

```sh
npm run build
# or
yarn build
```

## Repository

The public repository for this project can be found [here](https://github.com/Rengkat/Blutech-Solutions-Front-End-Engineer-Test-Project.git).

## Contact

If you have any questions or need further assistance, please contact me at alexrengkat@gmail.com or +2348067581175.
