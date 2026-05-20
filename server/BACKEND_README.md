# 🚀 APJ Institute Backend API Documentation

Complete production-ready backend system for APJ Institute Dantewada college website.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [File Upload](#file-upload)
- [Testing with Postman](#testing-with-postman)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Project Overview

This backend system provides a complete REST API for managing:
- ✅ Admin authentication and authorization
- ✅ Student inquiries and contact form submissions
- ✅ Live notifications and announcements
- ✅ College events management
- ✅ Gallery image uploads
- ✅ Faculty/Staff information
- ✅ Automatic cleanup of old data (inquiries & notifications)

**Architecture**: Node.js + Express.js + MySQL + Prisma ORM

---

## 🛠 Tech Stack

- **Runtime**: Node.js (v16+)
- **Framework**: Express.js
- **Database**: MySQL (v8.0+)
- **ORM**: Prisma
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs
- **File Upload**: Multer
- **Scheduling**: node-cron
- **Validation**: express-validator
- **CORS**: cors
- **Environment**: dotenv

---

## 📥 Installation

### Step 1: Clone and Navigate
```bash
cd APJ-Institute-Website/server
```

### Step 2: Install Dependencies
```bash
npm install
```

This will install all required packages:
- express, cors, dotenv
- @prisma/client, prisma, mysql2
- bcryptjs, jsonwebtoken
- multer, node-cron, express-validator
- nodemon (dev)

### Step 3: Verify Installation
```bash
npm list
```

---

## ⚙️ Configuration

### Step 1: Create Environment File

Copy `.env.example` to `.env` and update values:

```bash
cp .env.example .env
```

### Step 2: Configure `.env`

```env
# DATABASE
DATABASE_URL="mysql://root:your_password@localhost:3306/apj_institute"

# JWT
JWT_SECRET="your_jwt_secret_key_min_32_chars_long_secure_key_123456"
JWT_EXPIRE="7d"

# SERVER
PORT=5000
NODE_ENV="development"

# FILE UPLOAD
MAX_FILE_SIZE=5242880
UPLOAD_DIR="./uploads"

# CORS
CLIENT_URL="http://localhost:5173"
```

**Important**: 
- Generate a strong JWT_SECRET (32+ characters)
- Update DATABASE_URL with your MySQL credentials
- Change CLIENT_URL if frontend runs on different port

---

## 🗄️ Database Setup

### Step 1: Create MySQL Database

```sql
CREATE DATABASE apj_institute;
USE apj_institute;
```

### Step 2: Run Prisma Migrations

```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations (creates tables)
npm run prisma:migrate -- init
```

### Step 3: Verify Tables Created

Tables created:
- `admins` - Admin user accounts
- `inquiries` - Contact form submissions
- `notifications` - Live announcements
- `events` - College events
- `galleries` - Gallery images
- `faculties` - Faculty/staff info

### Step 4: View Database (Optional)

```bash
npm run prisma:studio
```

Opens Prisma Studio at http://localhost:5555

---

## 🚀 Running the Server

### Development Mode (with auto-reload)

```bash
npm run dev
```

Server will start at `http://localhost:5000`

### Production Mode

```bash
npm start
```

---

## 📚 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### 🔐 Authentication Routes

#### Signup Admin
```http
POST /api/auth/signup
Content-Type: application/json

{
  "name": "Admin Name",
  "email": "admin@example.com",
  "password": "Password@123"
}
```

**Response** (201):
```json
{
  "success": true,
  "message": "Admin signup successful",
  "data": {
    "admin": {
      "id": 1,
      "name": "Admin Name",
      "email": "admin@example.com",
      "role": "admin"
    },
    "token": "eyJhbGciOiJIUzI1NiIs..."
  }
}
```

#### Login Admin
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@example.com",
  "password": "Password@123"
}
```

#### Get Admin Profile
```http
GET /api/auth/profile
Authorization: Bearer <JWT_TOKEN>
```

#### Change Password
```http
PUT /api/auth/change-password
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "oldPassword": "Password@123",
  "newPassword": "NewPassword@456"
}
```

---

### 📩 Inquiry Routes

#### Create Inquiry (Public)
```http
POST /api/inquiries
Content-Type: application/json

{
  "name": "Student Name",
  "email": "student@example.com",
  "phone": "+91-9876543210",
  "message": "I want to know about admission process..."
}
```

#### Get All Inquiries (Protected)
```http
GET /api/inquiries?page=1&limit=10&status=new
Authorization: Bearer <JWT_TOKEN>
```

Query Parameters:
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `status` - Filter by status (new, read, resolved)

#### Get Single Inquiry
```http
GET /api/inquiries/:id
Authorization: Bearer <JWT_TOKEN>
```

#### Update Inquiry
```http
PUT /api/inquiries/:id
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "status": "read"
}
```

#### Delete Inquiry
```http
DELETE /api/inquiries/:id
Authorization: Bearer <JWT_TOKEN>
```

---

### 🔔 Notification Routes

#### Create Notification (Protected)
```http
POST /api/notifications
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "title": "Admission Open",
  "message": "Admissions for 2024-25 are now open!",
  "type": "info",
  "priority": 1,
  "isActive": true
}
```

Types: `info`, `warning`, `success`, `error`
Priority: `0` (low), `1` (medium), `2` (high)

#### Get All Notifications (Protected)
```http
GET /api/notifications?page=1&limit=10&type=info&active=true
Authorization: Bearer <JWT_TOKEN>
```

#### Get Active Notifications (Public)
```http
GET /api/notifications/active/list
```

#### Update Notification (Protected)
```http
PUT /api/notifications/:id
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "title": "Updated Title",
  "isActive": false
}
```

#### Delete Notification (Protected)
```http
DELETE /api/notifications/:id
Authorization: Bearer <JWT_TOKEN>
```

---

### 🎉 Event Routes

#### Create Event (Protected)
```http
POST /api/events
Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data

Form Data:
- title: "Annual Sports Day"
- description: "Annual sports event for all students..."
- date: "2024-03-15T10:00:00"
- location: "College Ground"
- image: <file>
```

#### Get All Events (Public)
```http
GET /api/events?page=1&limit=10&active=true
```

#### Get Upcoming Events (Public)
```http
GET /api/events/upcoming/list?limit=5
```

#### Get Single Event
```http
GET /api/events/:id
```

#### Update Event (Protected)
```http
PUT /api/events/:id
Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data

Form Data:
- title: "Updated Title"
- description: "Updated description"
- date: "2024-03-20T10:00:00"
- location: "New Location"
- image: <file> (optional)
```

#### Delete Event (Protected)
```http
DELETE /api/events/:id
Authorization: Bearer <JWT_TOKEN>
```

---

### 🖼 Gallery Routes

#### Upload Image (Protected)
```http
POST /api/gallery
Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data

Form Data:
- title: "Campus View"
- category: "campus"
- image: <file> (JPEG, PNG, GIF, WebP - max 5MB)
```

#### Get All Gallery Images (Public)
```http
GET /api/gallery?page=1&limit=20&category=campus&active=true
```

#### Get Images by Category (Public)
```http
GET /api/gallery/category/campus?limit=20
```

#### Get Single Image
```http
GET /api/gallery/:id
```

#### Update Gallery Image (Protected)
```http
PUT /api/gallery/:id
Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data

Form Data:
- title: "Updated Title"
- category: "events"
- isActive: true
- image: <file> (optional)
```

#### Delete Gallery Image (Protected)
```http
DELETE /api/gallery/:id
Authorization: Bearer <JWT_TOKEN>
```

---

### 👨‍🏫 Faculty Routes

#### Create Faculty (Protected)
```http
POST /api/faculty
Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data

Form Data:
- name: "Dr. John Doe"
- role: "Professor"
- email: "john@example.com"
- phone: "+91-9876543210"
- department: "Computer Science"
- bio: "Experience in..."
- image: <file> (optional)
```

#### Get All Faculty (Protected)
```http
GET /api/faculty?page=1&limit=10&department=CSE&active=true
Authorization: Bearer <JWT_TOKEN>
```

#### Get Active Faculty (Public)
```http
GET /api/faculty/active/all
```

#### Get Faculty by Department (Public)
```http
GET /api/faculty/department/CSE
```

#### Get Single Faculty
```http
GET /api/faculty/:id
```

#### Update Faculty (Protected)
```http
PUT /api/faculty/:id
Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data

Form Data:
- name: "Updated Name"
- role: "Associate Professor"
- email: "newemail@example.com"
- department: "IT"
- image: <file> (optional)
```

#### Delete Faculty (Protected)
```http
DELETE /api/faculty/:id
Authorization: Bearer <JWT_TOKEN>
```

---

## 🔐 Authentication

### JWT Token

All protected endpoints require JWT token in `Authorization` header:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Token Structure

Token includes:
- `id` - Admin ID
- `email` - Admin email
- `type` - "admin"
- `iat` - Issued at
- `exp` - Expiration time

### Token Expiration

Tokens expire after 7 days (configurable via `JWT_EXPIRE` in `.env`)

When token expires:
- Request returns 401 Unauthorized
- Admin must login again to get new token

---

## 📤 File Upload

### Supported Formats
- JPEG
- PNG
- GIF
- WebP

### Size Limit
- Maximum: 5 MB

### Upload Endpoints
- `POST /api/events` - Event image
- `POST /api/gallery` - Gallery image
- `POST /api/faculty` - Faculty image

### Uploaded Files Location
```
server/uploads/
```

### File URL Format
```
/uploads/[filename]
```

Example: `/uploads/1234567890-987654321-image.jpg`

---

## 🧪 Testing with Postman

### Import Postman Collection

1. Open Postman
2. Click "Import"
3. Choose "Link"
4. Paste Postman collection URL or import JSON file

### Postman Environment Variables

Create environment with variables:

```json
{
  "base_url": "http://localhost:5000/api",
  "token": "your_jwt_token_here",
  "admin_email": "admin@example.com",
  "admin_password": "Password@123"
}
```

### Test Workflow

1. **Signup**: POST /auth/signup → get token
2. **Login**: POST /auth/login → get token
3. **Create Inquiry**: POST /inquiries (no auth needed)
4. **Get Inquiries**: GET /inquiries (with auth)
5. **Create Notification**: POST /notifications (with auth)
6. **Create Event**: POST /events with image (with auth)
7. **Upload Gallery**: POST /gallery with image (with auth)
8. **Create Faculty**: POST /faculty with image (with auth)

---

## 🔄 Automatic Data Deletion (Cron Jobs)

### Scheduled Tasks

**Inquiries** - Delete inquiries older than 48 hours
- Schedule: Every hour at :00 minute
- Runs automatically

**Notifications** - Delete notifications older than 72 hours
- Schedule: Every hour at :30 minute
- Runs automatically

Monitor logs to see cron job executions:
```
✅ Auto-deleted 5 old inquiries (older than 48 hours)
✅ Auto-deleted 2 old notifications (older than 72 hours)
```

---

## 🌐 Deployment

### Deploy to Render

1. Push code to GitHub
2. Go to https://render.com
3. Create new Web Service
4. Connect GitHub repository
5. Set Environment Variables (copy from `.env`)
6. Deploy

### Deploy to Railway

1. Push code to GitHub
2. Go to https://railway.app
3. Create new project
4. Connect GitHub repository
5. Add MySQL database
6. Set environment variables
7. Deploy

### Deploy to Heroku

```bash
# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Add MySQL add-on
heroku addons:create cleardb:ignite

# Set environment variables
heroku config:set JWT_SECRET="your_secret_key"
heroku config:set NODE_ENV="production"

# Deploy
git push heroku main
```

---

## 🐛 Troubleshooting

### Issue: Database Connection Error

**Error**: "Cannot connect to database"

**Solution**:
1. Check MySQL is running
2. Verify DATABASE_URL in `.env`
3. Check credentials (username, password)
4. Ensure database exists: `CREATE DATABASE apj_institute;`

### Issue: Port Already in Use

**Error**: "Port 5000 already in use"

**Solution**:
```bash
# Change PORT in .env
PORT=5001

# Or kill process using port 5000
lsof -i :5000
kill -9 <PID>
```

### Issue: File Upload Fails

**Error**: "Error uploading file"

**Solution**:
1. Check uploads folder exists: `mkdir uploads`
2. Verify file size < 5MB
3. Check file format (JPEG, PNG, GIF, WebP)
4. Check folder permissions: `chmod 755 uploads`

### Issue: JWT Token Invalid

**Error**: "Token verification failed"

**Solution**:
1. Copy full token (without "Bearer")
2. Check token hasn't expired (7 days)
3. Verify JWT_SECRET matches in `.env`
4. Login again to get new token

### Issue: Cron Jobs Not Running

**Check Logs**:
```bash
# In development, cron jobs log to console
npm run dev
# Look for: ✅ Cron job scheduled...
```

**Solution**:
1. Server must stay running for cron jobs
2. Check server logs for errors
3. Verify Prisma client is initialized

---

## 📞 Support

For issues or questions:
1. Check this documentation
2. Review error messages in server logs
3. Check `.env` configuration
4. Verify database connection
5. Test endpoints with Postman

---

## 📝 License

This project is part of APJ Institute Website development.

---

**Generated**: 2024
**Backend Version**: 1.0.0
