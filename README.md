# User Management Application

This project is a simple User Management System built using React.js. It allows users to perform CRUD (Create, Read, Update, Delete) operations for managing user data.

## Features
- **Add Users**: Create new user records.
- **View Users**: Display a list of users with pagination support.
- **Edit Users**: Update existing user details.
- **Delete Users**: Remove user records from the system.
- **Pagination**: Navigate through multiple pages of users.
- **Error Handling**: Displays appropriate error messages when operations fail.
- **Loading State**: Shows a loading indicator while fetching or processing data.

## Technologies Used
- **React.js**: Frontend framework
- **Axios**: HTTP client for API requests
- **GoREST API**: Backend API used for managing user data

## Setup Instructions
Follow these steps to run the project locally:

### Prerequisites
- Node.js and npm installed on your machine.

### Steps
1. Clone the repository:
```bash
   git clone <repository-url>
   cd user-management-app
```
2. Install dependencies
```bash
    npm install
```
3. Start the application:
```bash
    npm start
```
4. Open the application in your browser at:
```bash
    http://localhost:3000
```

## API Integration
This application integrates with the GoREST API to manage user data. A Bearer token is required for authorized operations like adding, editing, or deleting users.

### API Endpoints:
- **GET Users**: `GET https://gorest.co.in/public/v2/users?page=<page>`
- **POST User**: `POST https://gorest.co.in/public/v2/users`
- **PUT User**: `PUT https://gorest.co.in/public/v2/users/{userId}`
- **DELETE User**: `DELETE https://gorest.co.in/public/v2/users/{userId}`

These API requests require the **Bearer token** in the `Authorization` header.

### Sample Axios Request:
```javascript
axios.get("https://gorest.co.in/public/v2/users", {
  headers: { Authorization: `Bearer <YOUR_BEARER_TOKEN>` },
})
  .then(response => console.log(response.data))
  .catch(error => console.error("Error fetching users", error));


## Important Notes

## Important Notes

- Replace the **Authorization token** in the code with your **Bearer token**.
- Ensure the token has the necessary permissions for CRUD operations (add, edit, delete users).
- You can obtain a Bearer token by signing up on GoREST and creating an application.


## Folder Structure
```bash
src/
│
├── components/
│   ├── UserForm.js        # Component for adding/editing users
│   ├── UserList.js        # Component for displaying user list
│
├── App.js                # Main application logic
├── index.js              # Application entry point
├── App.css               # Global styles
│
└── ...                   # Other configuration files
```