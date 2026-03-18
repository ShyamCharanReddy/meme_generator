#  MEMER - Interactive Full-Stack Meme Generator


A robust MERN stack application that allows users to create, download, and save custom memes. Featuring a sleek dark-mode "glassmorphism" UI, an interactive canvas editor, and secure user authentication.

##  Features

* **Secure Authentication:** User registration and login powered by JWT and bcrypt password hashing.
* **Meme Templates & Custom Uploads:** Fetch popular global templates dynamically via the Imgflip API or upload your own images using client-side File Blobs.
* **Interactive Canvas Editor:**
  * Add multiple text blocks dynamically.
  * Drag and position text anywhere on the image using `react-draggable`.
  * Customize text colors with an integrated color picker.
  * Remove specific text blocks with a hidden delete function.
* **Download & Save:** Rasterize the customized DOM elements into high-quality JPEG images using `html2canvas`.
* **Personalized Gallery:** Save creations directly to a MongoDB database and manage them in a personal history dashboard.

##  Tech Stack

**Frontend:**
* React.js (Vite)
* React Bootstrap (UI Components)
* React Router (Dynamic Routing)
* react-draggable (Canvas Interaction)
* html2canvas & file-saver (Image Generation)

**Backend:**
* Node.js & Express.js
* MongoDB & Mongoose (Data Modeling)
* JSON Web Tokens (JWT) (Authorization)
* bcryptjs (Security)

## Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
* Node.js installed
* A MongoDB URI string (local or Atlas)

### Installation

1. Clone the repository:
    git clone https://github.com/ShyamCharanReddy/meme_generator.git
    
    cd meme_generator

2. Setup the Backend:
    cd backend
    
    npm install

    Create a .env file in the backend folder and add the following:
    
    PORT=5000
    
    MONGO_URI=your_mongodb_connection_string
    
    JWT_SECRET=your_super_secret_jwt_key

    Start the backend server:
    npm run server

3. Setup the Frontend:
    Open a new terminal window:
    cd frontend
    npm install

    Start the React development server:
    npm run dev

4. Open the App:
    Visit http://localhost:5173 in your browser.

<img width="1870" height="986" alt="Image" src="https://github.com/user-attachments/assets/d76fce1b-c6ed-40ed-811a-bfab87a811b2" />

<img width="1870" height="986" alt="Image" src="https://github.com/user-attachments/assets/982af249-b6f2-4ed6-af9d-441062b6e8da" />

<img width="1874" height="1013" alt="Image" src="https://github.com/user-attachments/assets/37f01959-13d5-4d04-8c4e-2857465ce999" />

<img width="1874" height="1013" alt="Image" src="https://github.com/user-attachments/assets/23d0696b-80bd-4116-aed9-7f1b2126a839" />

<img width="1874" height="1013" alt="Image" src="https://github.com/user-attachments/assets/2e952f26-f2f6-47d0-b1e9-bddd39120198" />

<img width="1874" height="1013" alt="Image" src="https://github.com/user-attachments/assets/78e5be89-6cc6-4468-a513-100b1fdc2e68" />
