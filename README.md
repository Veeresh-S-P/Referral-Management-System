# 🚀 Candidate Referral Management System

A full-stack **Candidate Referral Management System** built with **Node.js**, **Express**, **MongoDB**, and **Vanilla JS** frontend to simulate referral functionalities inspired by Worko.ai.

---

## 🌐 Live Demo

- 🔗 **Frontend**: [https://referral-management-system.netlify.app](https://referral-management-system.netlify.app)
- 🔗 **Backend API**: [https://referral-management-system.onrender.com](https://referral-management-system.onrender.com)

---

## ✨ Features

- ✅ User Registration and Login (JWT-based)
- ✅ Add candidates with resume (PDF only)
- ✅ View all referred candidates
- ✅ Update candidate status (Pending, Reviewed, Hired)
- ✅ Delete referred candidates
- ✅ Dashboard metrics: total candidates & by status
- ✅ Secure endpoints with JWT
- ✅ Responsive UI for mobile, tablet, and desktop

---

## 🧰 Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: HTML, CSS, JavaScript
- **Authentication**: JWT
- **Resume Upload**: multer (local storage)
- **Deployment**: Render (backend), Netlify (frontend)

---

## 🛠️ How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/referral-management-system.git
   cd referral-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. **Start the server**
   ```bash
   node server.js
   ```

5. **Open frontend**
   - Navigate to `public/index.html` in browser **or**
   - Run a local server to serve frontend if needed.

---

## 🔐 API Endpoints

> Add this header to all protected routes:
> 
> ```
> Authorization: Bearer <your_token>
> ```

### 1. Register

**POST** `/api/auth/register`
```json
{
  "email": "admin@example.com",
  "password": "123456"
}
```

---

### 2. Login

**POST** `/api/auth/login`
```json
{
  "email": "admin@example.com",
  "password": "123456"
}
```
Response:
```json
{
  "token": "eyJhbGciOiJIUzI1..."
}
```

---

### 3. Add a Candidate

**POST** `/api/candidates`  
**Body (form-data):**
- name
- email
- phone
- jobTitle
- resume (PDF)

---

### 4. Get All Candidates

**GET** `/api/candidates`

---

### 5. Update Status

**PUT** `/api/candidates/:id/status`
```json
{
  "status": "Reviewed"
}
```

---

### 6. Delete Candidate

**DELETE** `/api/candidates/:id`

---

### 7. Get Metrics

**GET** `/api/candidates/metrics`

---

## 📌 Notes

- Resume uploads restricted to **PDF only**
- JWT Token is required for all candidate-related routes
- Files are stored locally in `/uploads`
- UI is built using pure HTML/CSS/JS (no frameworks)

---

## 📚 License

This project is licensed under the MIT License.

---

## 🤝 Acknowledgement

Built with 💙 to demonstrate full-stack capabilities for candidate referral workflows.
