💬 TalkSphere – A Global Chatting Vibe
A scalable real-time chat app built with React, Node.js, Express, MongoDB, and Socket.IO. Features secure authentication, profile management, instant messaging, live user presence, and dynamic theme switching for a personalized user experience.

**

🚀 Features
Real-time Messaging: Instant bi-directional communication powered by WebSockets (Socket.IO) with reliable message delivery and dynamic online presence tracking.

Robust Authentication: Secure JWT-based authentication with cookie management and session validation.

Advanced State Management: Lightweight and reactive global state handled by Zustand for performant UI updates.

Media Support: Upload and share images using Cloudinary’s cloud media pipeline, enabling optimized delivery and transformations.

CORS-Safe Cross-Origin Requests: Fine-grained CORS policy allowing trusted frontend domains to connect, ensuring security without compromising functionality.

Responsive UI: Modern React frontend with context-aware components and customizable themes.

Scalable Backend: Node.js and Express REST APIs interfaced with MongoDB Atlas, supporting efficient querying and data integrity.

Deployment: Automated CI/CD pipelines deploying frontend on Vercel and backend on Render with environment-aware configurations.

🛠️ Technology Stack
Layer	Technology	Purpose
Frontend	React, React Hot Toast, Zustand	Declarative UI, state management, notifications
Backend	Node.js, Express, Socket.IO	REST API, real-time communication
Database	MongoDB Atlas	Persistent user and message storage
Media Storage	Cloudinary	Cloud-based image hosting and optimization
Deployment	Vercel (frontend), Render (backend)	Scalable cloud deployment and hosting
Authentication	JWT, Cookies	Secure stateless authentication

Export to Sheets
📁 Project Structure Overview
<details>
<summary>Click to view project structure</summary>

/frontend
 ├─ public/                  # Public static assets
 │   ├─ avatar.png           # Default avatar image
 │   └─ vite.svg             # Vite logo asset
 │
 └─ src/
     ├─ App.jsx              # Root React component
     ├─ index.css            # Global CSS styles
     ├─ main.jsx             # React entry point
     │
     ├─ assets/              # Static assets used in app
     │   └─ react.svg          # React logo image
     │
     ├─ components/            # Reusable React UI components
     │   ├─ AuthimagePattern.jsx
     │   ├─ ChatContainer.jsx
     │   ├─ ChatHeader.jsx
     │   ├─ Footer.jsx
     │   ├─ MessageInput.jsx
     │   ├─ Navbar.jsx
     │   ├─ NoChatSelected.jsx
     │   ├─ Sidebar.jsx
     │   └─ skeletons/         # Loading skeleton components
     │       ├─ MessageSkeleton.jsx
     │       └─ SidebarSkeleton.jsx
     │
     ├─ constants/           # Constants and config values
     │   └─ index.js
     │
     ├─ lib/                 # Utility libraries and helpers
     │   ├─ axios.js           # Axios instance setup
     │   └─ utils.js           # Utility functions
     │
     ├─ Pages/                 # React pages (views/routes)
     │   ├─ AboutUs.jsx
     │   ├─ Contact.jsx
     │   ├─ HomePage.jsx
     │   ├─ LoginPage.jsx
     │   ├─ ProfilePage.jsx
     │   ├─ SettingsPage.jsx
     │   └─ SignUpPage.jsx
     │
     └─ store/                 # Zustand global state stores
         ├─ useAuthStore.js
         ├─ useChatStore.js
         └─ useThemeStore.js


/backend
 └─ src/
     ├─ index.js               # Server entry point & Socket.IO integration
     ├─ controllers/           # Express route controllers
     │   ├─ auth.controller.js
     │   └─ message.controller.js
     ├─ lib/                   # Utility libraries and service setups
     │   ├─ cloudinary.js      # Cloudinary media configuration
     │   ├─ db.js              # Database connection setup (MongoDB)
     │   ├─ socket.js          # Socket.IO configuration and events
     │   └─ utils.js           # Helper utility functions
     ├─ middleware/            # Express middleware
     │   └─ auth.middleware.js # Authentication middleware (JWT validation etc.)
     ├─ models/                # Mongoose schemas/models
     │   ├─ message.models.js
     │   └─ user.models.js
     ├─ routes/                # API route definitions
     │   ├─ auth.route.js
     │   └─ message.route.js
     └─ seeds/                 # Seed data scripts for initial DB population
         └─ user.seed.js
</details>

⚙️ Setup & Installation
Prerequisites
Node.js v18+

MongoDB Atlas account or a local MongoDB instance

Cloudinary account for media management

Git

1. Clone the Repository
Bash

git clone https://github.com/arunby15/TalkSphere.git
cd TalkSphere
2. Set Up Environment Variables
Create a .env file in both the /frontend and /backend directories. Populate them with your credentials as shown below.

Backend (/backend/.env)

Code snippet

PORT=5003
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
Frontend (/frontend/.env)

Code snippet

VITE_API_BASE_URL=http://localhost:5003
3. Install Dependencies
Run the installation command in both the frontend and backend directories.

Backend:

Bash

cd backend
npm install
Frontend:

Bash

cd ../frontend
npm install

4. Running the Application Locally
Start both the backend and frontend servers from their respective directories.

Start the Backend Server:

Bash
# From the /backend directory
npm run dev
Start the Frontend Development Server:


Bash
# From the /frontend directory
npm run dev
Open http://localhost:5173 in your browser to view the app.

🔧 Deployment
The frontend is deployed on Vercel, configured for continuous integration and delivery.

The backend is hosted on Render, providing a scalable and managed environment.

The backend's CORS policy is configured to accept requests only from the deployed frontend's domain, ensuring secure communication.

🙌 Contribution & Support
Contributions are welcome! Feel free to open issues or submit pull requests for improvements or bug fixes.

For questions or discussions, please use GitHub Discussions.

📜 License
This project is licensed under the MIT License. See the LICENSE file for full details.
