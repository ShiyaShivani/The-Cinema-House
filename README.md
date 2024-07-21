# Movie Hub

Movie Hub is a full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) and styled using Tailwind CSS. This application allows users to explore movies by different categories, review, rate, and comment on them.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)

## Features

- Browse movies by categories and genres
- Search for movies by name
- View detailed information about each movie
- Rate and review movies
- Comment on movie reviews
- User authentication (register, login, logout)
- Responsive design using Tailwind CSS
- Admin Page to control everything

## Technologies Used

- **Frontend**:
  - React
  - Redux Toolkit
  - React Router
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose

- **Others**:
  - Redux Toolkit for state management
  - React Toastify for notifications
  - React Query for data fetching

## Installation

1. Clone the repository:

    git clone https://github.com/your-username/movie-hub.git

2. Navigate to the project directory:

    cd filename

3. Install the dependencies for both the client and server:

    # Install server dependencies
    npm install

    # Install client dependencies
    cd frontent
    npm install

4. Create a `.env` file in the main directory and add the following environment variables:

    # .env
    1. MONGO_URI=your_mongodb_connection_string
    2. JWT_SECRET=your_jwt_secret
    3. PORT=3000

## Usage

1. Start the backend server:
    npm run backend

2. Start the frontend development server:

    cd frontent
    npm run frontend

3. To run both concurrently
   npm run fullstack

4. Open your browser and go to `http://localhost:5173` to use the application.



