# User Management Web Application

This is a simple web application for managing users. The application allows you to list users, add new users via a sign-up form, delete users, and export user data in CSV format.
 
 ## Backend deployed link
 https://knorex-1.onrender.com

 ## fronend backend link
 https://knorex-iota.vercel.app/


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Frontend Overview](#frontend-overview)
- [Feedback and Contributions](#feedback-and-contributions)

## Features

- **User Listing**: Display all users with their first name, last name, and email in a table format.
- **Add User**: A sign-up form to add a new user. Form validations included.
- **Delete User**: Delete a user with a confirmation popup.
- **Export Users**: Export selected user data to a CSV file.
- **Responsive Design**: Fully responsive design for mobile, tablet, and desktop devices.
- **Interactive UI**: Smooth animations and hover effects for a better user experience.

## Technologies Used

### Backend
- **Node.js** with **Express.js**
- **MongoDB** for database
- **Mongoose** for MongoDB object modeling
- **RESTful APIs** for backend services

### Frontend
- **React.js** for the frontend framework
- **CSS3** for styling and animations

### Additional Libraries
- **Multer** for handling file uploads
- **CSV-Parser** for CSV export functionality
- **Axios** for making HTTP requests from the frontend

## Installation

### Prerequisites
- **Node.js** and **npm** installed on your machine
- **MongoDB** installed and running

### Backend Installation




4. Start the backend server:
    ```bash
    npm start
    ```
    The backend server will start at `http://localhost:5000`.

### Frontend Installation

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```

2. Install the frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm start
    ```
    The frontend server will start at `http://localhost:3000`.

## Running the Application

1. Make sure the MongoDB server is running.
2. Start the backend server using `npm start` in the `backend` directory.
3. Start the frontend server using `npm start` in the `frontend` directory.
4. Open your web browser and navigate to `http://localhost:3000` to use the application.

## API Endpoints

### User Management
- **GET /api/users**: Retrieve all users
- **POST /api/users**: Create a new user
- **DELETE /api/users/:id**: Delete a user by ID
- **GET /api/users/export**: Export selected users to a CSV file

### Example Requests

- **Get All Users**
    ```bash
    curl -X GET http://localhost:5000/api/users
    ```

- **Create a New User**
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"firstName":"John", "lastName":"Doe", "email":"john@example.com", "password":"12345"}' https://knorex-iota.vercel.app/api/users
    ```

- **Delete a User**
    ```bash
    curl -X DELETE https://knorex-iota.vercel.app/api/users/1234567890abcdef12345678
    ```

## Frontend Overview

### Components
- **UsersTable**: Displays the user list with options to delete and export users.
- **SignUpForm**: Form component for adding new users.
- **DeleteConfirmationPopup**: Popup component to confirm user deletion.
- **ExportButton**: Button to export selected users to a CSV file.

### Styling
The frontend is styled with **CSS3** and includes responsive design to ensure usability across devices. Additional hover effects and animations provide a smooth user experience.

### State Management
React's **useState** and **useEffect** hooks are used for managing component state and side effects.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
