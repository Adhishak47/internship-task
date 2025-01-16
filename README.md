# User Dashboard Application

A modern user dashboard application built with React Vite, Node.js, Express, and Firebase, containerized with Docker.

## 🚀 Features

- User Management with CRUD Operations
- Real-time Data Updates using Firebase
- Responsive Dashboard Interface with Tailwind CSS
- Containerized Application using Docker
- RESTful API Backend with Express
- Authentication and Authorization

## 🛠️ Tech Stack

- **Frontend:**
  - React (Vite)
  - Tailwind CSS
  - React Router DOM
  - Axios for API calls

- **Backend:**
  - Node.js
  - Express.js
  - Firebase Admin SDK

- **Database:**
  - Firebase Realtime Database

- **Deployment:**
  - Docker
 

## 🏗️ Project Structure

```
user-dashboard/
├── frontend/                # React Vite application
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── backend/                 # Node.js Express server
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├
└── README.md
```

## 🚦 Prerequisites

- Node.js (v16 or higher)
- Docker 
- Firebase Account and Project Setup
- Git

## ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adhishak47/internship-task.git
   cd user-dashboard
   ```

2. **Environment Setup**

   Create `.env` files in both frontend and backend directories:

   Frontend (.env):
   ```env
   VITE_API_URL=http://localhost:5000
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

   Backend (.env):
   ```env
   PORT=5000
   FIREBASE_SERVICE_ACCOUNT_KEY=path_to_your_service_account_key.json
   ```

3. **Using Docker**

   Build and run the Frontend application using Docker:
   ```bash
   docker build -t vite-app-nginx .
   docker run -p 5173:80 vite-app-nginx
   ```

 Build and run the Backend application using Docker:
   ```bash
   docker build -t backend .
   docker run -p 5000:5000 backend
   ```

   

   The application will be available at:
   - Frontend: http://localhost:80
   - Backend API: http://localhost:5000

3. **Running Locally (Without Docker)**

   Frontend:
   ```bash
   cd my-project
   npm install
   npm run dev
   ```

   Backend:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

## 🔄 API Documentation

### User Management Endpoints

#### Get All Users
```http
GET /api/users
```

Response:
```json
{
  "users": [
    {
      "id": "string",
      "name": "string",
      "email": "string",
      "role": "string"
    }
  ]
}
```

#### Get Single User
```http
GET /api/users/:id
```

#### Create User
```http
POST /api/users
```

Request Body:
```json
{
  "name": "string",
  "email": "string",
  "role": "string"
}
```

#### Update User
```http
PUT /api/users/:id
```

#### Delete User
```http
DELETE /api/users/:id
```

## 🐳 Docker Images

The application is available as Docker images on Docker Hub:

- Frontend: `yourdockerhub/user-dashboard-frontend`
- Backend: `yourdockerhub/user-dashboard-backend`

To pull the images:
```bash
docker pull yourdockerhub/user-dashboard-frontend
docker pull yourdockerhub/user-dashboard-backend
```

## 🔧 Configuration

### Firebase Setup

1. Create a Firebase project in the Firebase Console
2. Download your service account key JSON file
3. Enable Authentication and Realtime Database
4. Add Firebase configuration to your frontend environment variables
5. Place your service account key in the backend directory



## 📝 Development

### Frontend Development

The frontend is built with React Vite and uses:
- Tailwind CSS for styling
- React Router for navigation
- Axios for API requests
- Firebase SDK for authentication

### Backend Development

The backend uses:
- Express.js for REST API
- Firebase Admin SDK for database operations
- JWT for authentication
- Error handling middleware

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
