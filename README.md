# Ink-Pixel

A modern and minimalistic blog platform built using **Express.js** and **Next.js**.

## 🚀 Features
- 📝 Create, edit, and delete blog posts
- 🔍 Search and filter functionality
- 🎨 Responsive and clean UI
- 🌙 Dark mode support
- 📡 REST API for blog management
- 🛠️ Authentication (JWT-based)
- 🗂️ SEO-optimized pages

## 🏗️ Tech Stack
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Express.js, MongoDB
- **Authentication**: JWT, bcrypt
- **Hosting**: Vercel (Frontend), Render/Railway (Backend)

## 📌 Installation & Setup
1. **Clone the Repository**
   ```sh
   git clone https://github.com/gagan-1307/Ink-Pixel.git
   cd Ink-Pixel
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Set Up Environment Variables**
   - Create a `.env` file in the root directory and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
4. **Run the Server**
   ```sh
   npm start
   ```
   The backend runs at `http://localhost:5000`

5. **Run the Frontend** (if using Next.js)
   ```sh
   cd client
   npm install
   npm run dev
   ```
   The frontend runs at `http://localhost:3000`

## 🛠️ API Endpoints
| Method | Endpoint       | Description           |
|--------|---------------|-----------------------|
| GET    | `/posts`      | Fetch all blog posts |
| GET    | `/posts/:id`  | Fetch a single post  |
| POST   | `/posts`      | Create a new post    |
| PUT    | `/posts/:id`  | Update a post        |
| DELETE | `/posts/:id`  | Delete a post        |

## 📸 Screenshots
![Homepage](https://via.placeholder.com/800x400)

## 🌟 Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a **Pull Request**.

## 📜 License
This project is licensed under the MIT License.

---

🔥 **Star** this repo if you found it useful!

