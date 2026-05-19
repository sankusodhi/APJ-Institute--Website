# 🌐 APJ Institute Backend - Deployment Guide

Complete guide to deploy backend to production platforms.

---

## 📋 Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Deploy to Render](#deploy-to-render)
3. [Deploy to Railway](#deploy-to-railway)
4. [Deploy to Heroku](#deploy-to-heroku)
5. [Deploy to AWS](#deploy-to-aws)
6. [Production Configuration](#production-configuration)
7. [Post-Deployment](#post-deployment)

---

## ✅ Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All environment variables are configured
- [ ] Database is set up on production MySQL server
- [ ] Prisma migrations are up to date
- [ ] All endpoints tested with Postman
- [ ] Code is committed to GitHub
- [ ] .env file is NOT committed (check .gitignore)
- [ ] Server runs successfully locally with `npm run dev`
- [ ] Frontend URL is ready for CORS configuration

---

## 🚀 Deploy to Render (Recommended - Easiest)

### Step 1: Prepare GitHub Repository
```bash
# Push code to GitHub
git add .
git commit -m "Backend ready for deployment"
git push origin main
```

### Step 2: Create Render Account
- Go to https://render.com
- Sign up with GitHub account
- Allow access to your repositories

### Step 3: Create Web Service

1. Click "New +" → "Web Service"
2. Connect GitHub repository
3. Fill in details:
   - **Name**: `apj-institute-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid for production)

### Step 4: Add Environment Variables

In Render dashboard:
1. Go to Service → Environment
2. Add all variables from `.env`:

```env
DATABASE_URL=mysql://[user]:[password]@[host]:3306/apj_institute
JWT_SECRET=your_strong_secret_key_here
JWT_EXPIRE=7d
PORT=10000
NODE_ENV=production
UPLOAD_DIR=./uploads
CLIENT_URL=https://yourdomain.vercel.app
```

### Step 5: Add MySQL Database

1. In Render → MySQL
2. Create MySQL instance
3. Copy connection string to DATABASE_URL
4. Set username and password

### Step 6: Deploy

1. Click "Deploy"
2. Wait for build to complete
3. Check logs for errors
4. Get your URL: `https://apj-institute-backend.onrender.com`

### Step 7: Test Deployment

```bash
curl https://apj-institute-backend.onrender.com/api/health
```

---

## 🚀 Deploy to Railway

### Step 1: Create Railway Account
- Go to https://railway.app
- Sign up with GitHub

### Step 2: Create New Project
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Select your APJ Institute repository

### Step 3: Add MySQL Database
1. Click "New" → "Database"
2. Select "MySQL"
3. Railway creates database automatically

### Step 4: Configure Environment Variables

Railway automatically sets:
- `DATABASE_URL` from MySQL plugin

Add additional variables:
1. Go to Variables tab
2. Add all from `.env`:

```
JWT_SECRET=your_strong_secret_key
NODE_ENV=production
CLIENT_URL=your_frontend_url
```

### Step 5: Configure Build and Start

In railway.toml or Variables:
```
Build Command: npm install
Start Command: npm start
```

### Step 6: Deploy

1. Railway automatically deploys
2. Check deployment logs
3. Get your URL from Railway dashboard

### Step 7: Test
```bash
curl https://[your-railway-url].railway.app/api/health
```

---

## 🚀 Deploy to Heroku (May Require Payment)

### Step 1: Install Heroku CLI
```bash
# macOS
brew tap heroku/brew && brew install heroku

# Ubuntu/Debian
curl https://cli-assets.heroku.com/install-ubuntu.sh | sh

# Windows
Download from https://devcenter.heroku.com/articles/heroku-cli
```

### Step 2: Login to Heroku
```bash
heroku login
```

### Step 3: Create Heroku App
```bash
heroku create apj-institute-backend
```

### Step 4: Add Cleardb MySQL Add-on
```bash
heroku addons:create cleardb:ignite -a apj-institute-backend
```

### Step 5: Set Environment Variables
```bash
heroku config:set JWT_SECRET="your_secret_key" -a apj-institute-backend
heroku config:set NODE_ENV="production" -a apj-institute-backend
heroku config:set CLIENT_URL="https://yourdomain.com" -a apj-institute-backend
```

### Step 6: Deploy
```bash
git push heroku main
```

### Step 7: Run Migrations
```bash
heroku run npm run prisma:generate -a apj-institute-backend
```

### Step 8: Get App URL
```bash
heroku apps:info -a apj-institute-backend
```

---

## 🚀 Deploy to AWS EC2 (Advanced)

### Step 1: Launch EC2 Instance

1. Go to AWS Console → EC2
2. Click "Launch Instance"
3. Select Ubuntu 22.04 LTS
4. Instance type: t3.micro (free tier)
5. Create security group (allow 80, 443, 5000)

### Step 2: Connect to Instance
```bash
ssh -i your-key.pem ubuntu@your-ec2-ip
```

### Step 3: Install Dependencies
```bash
sudo apt update
sudo apt install nodejs npm mysql-server git

# Start MySQL
sudo systemctl start mysql
```

### Step 4: Clone Repository
```bash
git clone https://github.com/yourusername/APJ-Institute-Website.git
cd APJ-Institute-Website/server
```

### Step 5: Setup Backend
```bash
npm install
cp .env.example .env
# Edit .env with production values
```

### Step 6: Setup Database
```bash
mysql -u root -p
CREATE DATABASE apj_institute;
EXIT;
```

### Step 7: Setup PM2 (Process Manager)
```bash
sudo npm install -g pm2
pm2 start server.js --name "apj-backend"
pm2 startup
pm2 save
```

### Step 8: Configure Nginx (Reverse Proxy)
```bash
sudo apt install nginx

# Create config
sudo nano /etc/nginx/sites-available/default
```

Add:
```nginx
server {
    listen 80 default_server;
    server_name _;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
    }
}
```

### Step 9: Enable SSL with Certbot
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## 🔧 Production Configuration

### Environment Variables for Production

```env
# Database - Use production MySQL server
DATABASE_URL="mysql://user:password@prod-db.example.com:3306/apj_institute"

# JWT - Use strong random secret
JWT_SECRET="$(openssl rand -base64 32)"
JWT_EXPIRE="7d"

# Server
PORT=5000
NODE_ENV="production"

# CORS - Use your actual domain
CLIENT_URL="https://yourdomain.com"

# Uploads - Use cloud storage or large disk
UPLOAD_DIR="./uploads"
```

### Security Best Practices

1. **Strong JWT Secret**
   ```bash
   openssl rand -base64 32
   ```

2. **Database Security**
   - Use strong passwords
   - Restrict database access by IP
   - Enable SSL for database connection

3. **API Security**
   - Enable HTTPS/SSL
   - Use CORS properly
   - Validate all inputs
   - Rate limiting (optional)

4. **File Upload Security**
   - Validate file types
   - Check file size
   - Store outside web root
   - Use CDN for serving

---

## ✅ Post-Deployment Verification

### Test Health Check
```bash
curl https://your-backend-url.com/api/health
```

Expected response:
```json
{
  "success": true,
  "message": "Server is running",
  "environment": "production"
}
```

### Test API Endpoints
```bash
# Create test inquiry
curl -X POST https://your-backend-url.com/api/inquiries \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@test.com",
    "phone": "+91-9876543210",
    "message": "Test from production"
  }'

# Get notifications
curl https://your-backend-url.com/api/notifications/active/list
```

### Monitor Logs

**Render**: Dashboard → Logs
**Railway**: Dashboard → Logs
**Heroku**: `heroku logs --tail`
**EC2**: `pm2 logs`

### Check Database

```bash
# Connect to production database
mysql -h [host] -u [user] -p [database]

# Check tables
SHOW TABLES;
SELECT * FROM admins;
```

---

## 🐛 Common Deployment Issues

### Issue: Database Connection Error
```
Error: Can't connect to database
```

**Solution**:
1. Check DATABASE_URL in environment variables
2. Verify database server is running
3. Confirm firewall allows connection
4. Check database credentials

### Issue: Port Already in Use
```
Error: EADDRINUSE: address already in use :::5000
```

**Solution**:
1. Change PORT in environment variables
2. Kill existing process on that port
3. For Render/Railway: they manage ports

### Issue: File Upload Not Working
```
Error: Cannot find module 'uploads'
```

**Solution**:
1. Create uploads directory: `mkdir uploads`
2. Set proper permissions: `chmod 755 uploads`
3. Use cloud storage for production

### Issue: CORS Error
```
Error: CORS policy: blocked by browser
```

**Solution**:
1. Update CLIENT_URL in environment variables
2. Ensure it matches your frontend URL
3. Include protocol (https://)

### Issue: JWT Token Invalid
```
Error: Token verification failed
```

**Solution**:
1. Ensure JWT_SECRET matches between environments
2. Check token hasn't expired
3. Get new token by logging in

---

## 📊 Performance Optimization

### Enable Caching
```bash
# In server.js - Add caching headers
app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=3600');
  next();
});
```

### Database Optimization
```bash
# Add indexes to frequently queried fields
# Already done in Prisma schema
```

### Image Optimization
- Compress images before uploading
- Use WebP format
- Serve via CDN

---

## 📈 Monitoring & Maintenance

### Set Up Monitoring

**Render**: Built-in monitoring
**Railway**: Built-in monitoring
**Heroku**: New Relic integration
**EC2**: CloudWatch

### Regular Maintenance

1. Check server logs weekly
2. Monitor database size
3. Clean old uploads periodically
4. Update dependencies monthly
5. Test all endpoints monthly

### Backup Database

```bash
# Render/Railway - Automatic backups
# EC2 - Manual backups recommended

mysqldump -h [host] -u [user] -p [database] > backup.sql
```

---

## 🎯 Next Steps

1. ✅ Choose deployment platform
2. ✅ Follow platform-specific steps
3. ✅ Configure environment variables
4. ✅ Set up database
5. ✅ Deploy backend
6. ✅ Test all endpoints
7. ✅ Connect frontend to backend
8. ✅ Monitor logs regularly

---

## 📞 Deployment Support

**For Render Issues**:
- https://render.com/docs

**For Railway Issues**:
- https://railway.app/docs

**For Heroku Issues**:
- https://devcenter.heroku.com

**For AWS Issues**:
- https://docs.aws.amazon.com

---

## ✨ Production Checklist

- [ ] Backend deployed successfully
- [ ] Health check endpoint working
- [ ] Database configured and connected
- [ ] JWT authentication working
- [ ] File uploads working
- [ ] Cron jobs running
- [ ] CORS configured for frontend
- [ ] SSL/HTTPS enabled
- [ ] Monitoring set up
- [ ] Backups configured
- [ ] Frontend connected to backend
- [ ] All tests passing

---

**Deployment Complete! 🎉**

Your backend is now live and ready to serve your APJ Institute website.

---

**Version**: 1.0.0  
**Last Updated**: 2024
