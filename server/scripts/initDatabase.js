// scripts/initDatabase.js
// Database initialization script
// Creates initial admin user and seed data

import { PrismaClient } from "@prisma/client";
import { hashPassword } from "../utils/helpers.js";

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Initializing database...");

  try {
    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { email: "admin@apjinstitute.com" },
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists");
    } else {
      // Create default admin
      const hashedPassword = await hashPassword("Admin@123");
      const admin = await prisma.admin.create({
        data: {
          name: "APJ Administrator",
          email: "admin@apjinstitute.com",
          password: hashedPassword,
          role: "admin",
          isActive: true,
        },
      });
      console.log("✅ Admin created:", admin.email);
    }

    // Create sample notification
    const sampleNotification = await prisma.notification.create({
      data: {
        title: "Welcome to APJ Institute",
        message: "Welcome to APJ Institute Dantewada. This is a sample notification.",
        type: "info",
        priority: 1,
        isActive: true,
      },
    });
    console.log("✅ Sample notification created");

    // Create sample event
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 30);

    const sampleEvent = await prisma.event.create({
      data: {
        title: "Annual Convocation",
        description: "Annual convocation ceremony for all graduates.",
        date: futureDate,
        location: "Main Auditorium",
        isActive: true,
      },
    });
    console.log("✅ Sample event created");

    // Create sample faculty
    const sampleFaculty = await prisma.faculty.create({
      data: {
        name: "Dr. Example Faculty",
        role: "Professor",
        email: "faculty@apjinstitute.com",
        phone: "+91-9876543210",
        department: "Computer Science",
        bio: "Experienced faculty member with passion for teaching.",
        isActive: true,
      },
    });
    console.log("✅ Sample faculty created");

    console.log(`
╔════════════════════════════════════════════╗
║  ✅ DATABASE INITIALIZATION COMPLETE      ║
╚════════════════════════════════════════════╝

📊 Created:
   ✓ Admin User
   ✓ Sample Notification
   ✓ Sample Event
   ✓ Sample Faculty Member

🔐 Default Admin Credentials:
   Email: admin@apjinstitute.com
   Password: Admin@123

⚠️  IMPORTANT: Change default password after first login!

🚀 Next Steps:
   1. Start server: npm run dev
   2. Login with default credentials
   3. Change password in admin panel
    `);
  } catch (error) {
    console.error("❌ Database initialization failed:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
