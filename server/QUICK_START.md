# 🚀 APJ Institute Backend - Quick Start Guide

**Get the backend running in 5 minutes!**

---

## 📋 Prerequisites

- **Node.js** v16+ (Check: `node --version`)
- **npm** (comes with Node.js)
- **MySQL** v8.0+ (Check: `mysql --version`)
- **Git** (for version control)

---

## ⚡ Quick Setup (5 Steps)

### Step 1: Navigate to Server Directory
```bash
cd APJ-Institute-Website/server
```

### Step 2: Install Dependencies
```bash
npm install
```
⏱️ Takes 2-3 minutes

### Step 3: Setup Environment Variables
```bash
# Copy example file
cp .env.example .env

# Edit .env with your MySQL credentials
# Change DATABASE_URL to your MySQL connection string
```

**Example .env:**
```env
DATABASE_URL="mysql://root:password@localhost:3306/apj_institute"
JWT_SECRET="your_jwt_secret_key_here_min_32_characters_long_123456"
PORT=5000
NODE_ENV="development"
CLIENT_URL="http://localhost:5173"
```

### Step 4: Create MySQL Database
```bash
mysql -u root -p

# In MySQL console:
CREATE DATABASE apj_institute;
EXIT;
```

### Step 5: Run Server
```bash
npm run dev
```

✅ Server running at `http://localhost:5000`

---

## ✅ Verify Installation

Open browser and visit:
```
http://localhost:5000/api/health
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-15T10:30:45.123Z",
  "environment": "development"
}
```

---

## 🧪 Quick API Test

### 1. Create Admin Account
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin",
    "email": "admin@test.com",
    "password": "Admin@123"
  }'
```

**Save the token from response!**

### 2. Get Active Notifications
```bash
curl http://localhost:5000/api/notifications/active/list
```

### 3. Create an Inquiry
```bash
curl -X POST http://localhost:5000/api/inquiries \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+91-9876543210",
    "message": "I want to inquire about admission"
  }'
```

---

## 📁 Project Structure

```
server/
├── config/              # Configuration files
│   ├── database.js      # Prisma database setup
│   ├── jwt.js           # JWT token management
│   └── multer.js        # File upload configuration
├── controllers/         # Business logic
│   ├── authController.js
│   ├── inquiryController.js
│   ├── notificationController.js
│   ├── eventController.js
│   ├── galleryController.js
│   └── facultyController.js
├── routes/              # API routes
│   ├── authRoutes.js
│   ├── inquiryRoutes.js
│   ├── notificationRoutes.js
│   ├── eventRoutes.js
│   ├── galleryRoutes.js
│   └── facultyRoutes.js
├── middleware/          # Express middleware
│   ├── auth.js          # JWT verification
│   ├── errorHandler.js  # Global error handling
│   └── validation.js    # Request validation
├── cron/                # Scheduled tasks
│   └── jobs.js          # Auto-delete old data
├── utils/               # Helper functions
│   └── helpers.js       # Common utilities
├── prisma/              # Database schema
│   └── schema.prisma    # Prisma data model
├── uploads/             # Uploaded files
├── server.js            # Entry point
├── package.json         # Dependencies
├── .env                 # Environment variables
└── BACKEND_README.md    # Full documentation
```

---

## 🔗 Main API Endpoints

| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| POST | `/api/auth/signup` | ❌ | Create admin |
| POST | `/api/auth/login` | ❌ | Login admin |
| POST | `/api/inquiries` | ❌ | Submit inquiry |
| GET | `/api/inquiries` | ✅ | Get all inquiries |
| GET | `/api/notifications/active/list` | ❌ | Get notifications |
| POST | `/api/notifications` | ✅ | Create notification |
| GET | `/api/events` | ❌ | Get all events |
| GET | `/api/events/upcoming/list` | ❌ | Get upcoming events |
| POST | `/api/events` | ✅ | Create event |
| GET | `/api/gallery` | ❌ | Get gallery images |
| POST | `/api/gallery` | ✅ | Upload image |
| GET | `/api/faculty/active/all` | ❌ | Get all faculty |
| POST | `/api/faculty` | ✅ | Create faculty |

✅ = Requires JWT Token
❌ = Public endpoint

---

## 🧠 Next Steps

1. **Import Postman Collection**
   - File: `APJ_Institute_API.postman_collection.json`
   - Use this to test all APIs

2. **Read Full Documentation**
   - File: `BACKEND_README.md`
   - Complete API reference with examples

3. **Connect Frontend**
   - Update `package.json` in root
   - Add backend API URL to React environment

4. **Deploy**
   - Render: `https://render.com`
   - Railway: `https://railway.app`
   - See BACKEND_README.md for deployment steps

---

## 🐛 Troubleshooting

### ❌ MySQL Connection Error
```
Solution:
1. Check MySQL is running: mysql -u root -p
2. Update DATABASE_URL in .env
3. Create database: CREATE DATABASE apj_institute;
```

### ❌ Port 5000 Already in Use
```
Solution:
1. Change PORT in .env to 5001
2. Or kill process: lsof -i :5000 | kill -9 <PID>
```

### ❌ npm install fails
```
Solution:
1. Clear npm cache: npm cache clean --force
2. Delete node_modules: rm -rf node_modules
3. Reinstall: npm install
```

### ❌ File upload not working
```
Solution:
1. Create uploads folder: mkdir uploads
2. Set permissions: chmod 755 uploads
3. Check file size < 5MB
4. Check file format (JPEG, PNG, GIF, WebP)
```

---

## 📞 Common Commands

```bash
# Start development server (with auto-reload)
npm run dev

# Start production server
npm start

# Generate Prisma client
npm run prisma:generate

# Open Prisma Studio (database UI)
npm run prisma:studio

# View installed packages
npm list

# Update all packages
npm update
```

---

## 🎓 Learning Resources

- **Express.js**: https://expressjs.com
- **Prisma ORM**: https://www.prisma.io
- **JWT**: https://jwt.io
- **MySQL**: https://www.mysql.com
- **Node.js**: https://nodejs.org

---

## 💾 Important Files

- **Configuration**: `.env` (create from `.env.example`)
- **Routes**: `routes/*.js`
- **Database**: `prisma/schema.prisma`
- **Main Entry**: `server.js`
- **Documentation**: `BACKEND_README.md`

---

## ✨ Features Included

✅ **Authentication**: Admin signup/login with JWT
✅ **Inquiries**: Store and manage contact inquiries  
✅ **Notifications**: Live announcements and alerts
✅ **Events**: Manage college events
✅ **Gallery**: Upload and organize images
✅ **Faculty**: Manage faculty information
✅ **Auto-Cleanup**: Automatic deletion of old data
✅ **File Upload**: Image upload with Multer
✅ **Validation**: Request validation with rules
✅ **Error Handling**: Global error handling
✅ **CORS**: Cross-origin resource sharing
✅ **JWT Security**: Protected API routes

---

**Need Help?**
1. Check `BACKEND_README.md` for full documentation
2. Review error messages in server logs
3. Test endpoints with Postman collection
4. Check `.env` configuration

**Happy Coding! 🚀**
