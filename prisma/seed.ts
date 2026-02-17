import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting comprehensive database seeding...');

    // Clear existing data
    await prisma.reminder.deleteMany();
    await prisma.task.deleteMany();
    await prisma.familyMember.deleteMany();
    await prisma.user.deleteMany();
    await prisma.crop.deleteMany();
    await prisma.school.deleteMany();
    await prisma.hospital.deleteMany();

    // Hash passwords
    const superAdminPassword = await bcrypt.hash('admin123', 10);
    const adminPassword = await bcrypt.hash('admin456', 10);
    const userPassword = await bcrypt.hash('user123', 10);

    // Create Super Admin
    await prisma.user.create({
        data: {
            email: 'superadmin@zyvanta.com',
            username: 'superadmin',
            password: superAdminPassword,
            name: 'Super Administrator',
            role: Role.ADMIN,
            emailVerified: new Date(),
        },
    });

    // Create Admin
    await prisma.user.create({
        data: {
            email: 'admin@zyvanta.com',
            username: 'admin',
            password: adminPassword,
            name: 'Administrator',
            role: Role.ADMIN,
            emailVerified: new Date(),
        },
    });

    // Create Authority
    await prisma.user.create({
        data: {
            email: 'authority@zyvanta.com',
            username: 'authority',
            password: await bcrypt.hash('auth789', 10),
            name: 'Authority User',
            role: Role.AUTHORITY,
            emailVerified: new Date(),
        },
    });

    // Create Regular Users (20 users)
    const users = [];
    const userNames = [
        'Rajesh Kumar', 'Priya Sharma', 'Amit Patel', 'Sneha Reddy', 'Vikram Singh',
        'Anjali Gupta', 'Rahul Verma', 'Kavita Joshi', 'Sanjay Mehta', 'Deepa Nair',
        'Arun Malhotra', 'Pooja Desai', 'Rohit Sharma', 'Neha Agarwal', 'Karan Singh',
        'Meera Patel', 'Vivek Kumar', 'Anita Reddy', 'Manoj Gupta', 'Shweta Tiwari'
    ];

    for (let i = 0; i < 20; i++) {
        const user = await prisma.user.create({
            data: {
                email: `user${i + 1}@example.com`,
                username: `user${i + 1}`,
                password: userPassword,
                name: userNames[i],
                role: Role.USER,
                emailVerified: new Date(),
            },
        });
        users.push(user);
    }

    // Create Hospitals
    const hospitals = [
        { name: 'Apollo Hospital', location: 'Delhi', contact: '+91-11-12345678' },
        { name: 'Fortis Healthcare', location: 'Mumbai', contact: '+91-22-87654321' },
        { name: 'AIIMS', location: 'New Delhi', contact: '+91-11-26588500' },
        { name: 'Max Healthcare', location: 'Gurgaon', contact: '+91-124-4567890' },
        { name: 'Manipal Hospital', location: 'Bangalore', contact: '+91-80-12345678' },
    ];

    for (const hospital of hospitals) {
        await prisma.hospital.create({ data: hospital });
    }

    // Create Schools
    const schools = [
        { name: 'Delhi Public School', location: 'Delhi', contact: '+91-11-23456789' },
        { name: 'Kendriya Vidyalaya', location: 'Mumbai', contact: '+91-22-34567890' },
        { name: 'St. Mary\'s School', location: 'Bangalore', contact: '+91-80-45678901' },
        { name: 'DPS International', location: 'Gurgaon', contact: '+91-124-5678901' },
        { name: 'Springfield School', location: 'Chennai', contact: '+91-44-67890123' },
    ];

    for (const school of schools) {
        await prisma.school.create({ data: school });
    }

    // Create Crops
    const crops = [
        { name: 'Wheat', variety: 'HD-2967', season: 'Rabi', description: 'High yield wheat variety suitable for North India' },
        { name: 'Rice', variety: 'IR-64', season: 'Kharif', description: 'Popular rice variety with good grain quality' },
        { name: 'Cotton', variety: 'Bt-Cotton', season: 'Kharif', description: 'Bt cotton variety resistant to bollworm' },
        { name: 'Sugarcane', variety: 'Co-0238', season: 'Perennial', description: 'High sucrose content variety' },
        { name: 'Maize', variety: 'Hybrid-9001', season: 'Rabi', description: 'Hybrid maize with high yield potential' },
        { name: 'Pulses', variety: 'Pusa-1103', season: 'Rabi', description: 'Early maturing pulse variety' },
        { name: 'Millets', variety: 'Pearl Millet', season: 'Kharif', description: 'Drought resistant millet variety' },
        { name: 'Barley', variety: 'RD-2668', season: 'Rabi', description: 'Cold tolerant barley variety' },
    ];

    for (const crop of crops) {
        await prisma.crop.create({ data: crop });
    }

    // Create Family Members for some users
    const familyMembers = [
        { userId: users[0].id, name: 'Sunita Kumar', relation: 'Mother', age: 45 },
        { userId: users[0].id, name: 'Alok Kumar', relation: 'Father', age: 48 },
        { userId: users[0].id, name: 'Riya Kumar', relation: 'Sister', age: 16 },
        { userId: users[1].id, name: 'Ramesh Sharma', relation: 'Husband', age: 35 },
        { userId: users[1].id, name: 'Ananya Sharma', relation: 'Daughter', age: 8 },
        { userId: users[2].id, name: 'Leela Patel', relation: 'Mother', age: 60 },
        { userId: users[2].id, name: 'Dinesh Patel', relation: 'Brother', age: 28 },
        { userId: users[3].id, name: 'Vijay Reddy', relation: 'Husband', age: 40 },
        { userId: users[3].id, name: 'Kavya Reddy', relation: 'Daughter', age: 12 },
        { userId: users[3].id, name: 'Arjun Reddy', relation: 'Son', age: 10 },
    ];

    for (const member of familyMembers) {
        await prisma.familyMember.create({ data: member });
    }

    // Create Tasks for users
    const tasks = [
        { userId: users[0].id, title: 'Buy fertilizers for wheat crop', description: 'Purchase DAP and urea fertilizers', status: 'PENDING', dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
        { userId: users[0].id, title: 'Check irrigation system', description: 'Inspect drip irrigation for leaks', status: 'IN_PROGRESS', dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
        { userId: users[1].id, title: 'Submit school fees', description: 'Pay quarterly fees for DPS', status: 'PENDING', dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000) },
        { userId: users[1].id, title: 'Doctor appointment', description: 'Annual health checkup at Apollo', status: 'COMPLETED', dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000) },
        { userId: users[2].id, title: 'Crop insurance renewal', description: 'Renew crop insurance for kharif season', status: 'PENDING', dueDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) },
        { userId: users[2].id, title: 'Soil testing', description: 'Send soil samples for testing', status: 'IN_PROGRESS', dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000) },
        { userId: users[3].id, title: 'Vaccination for children', description: 'Annual vaccination at AIIMS', status: 'PENDING', dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000) },
        { userId: users[3].id, title: 'Parent-teacher meeting', description: 'Attend PTM at St. Mary\'s', status: 'COMPLETED', dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) },
    ];

    for (const task of tasks) {
        await prisma.task.create({ data: task });
    }

    // Create Reminders for users
    const reminders = [
        { userId: users[0].id, title: 'Take blood pressure medicine', time: new Date(Date.now() + 2 * 60 * 60 * 1000), type: 'MEDICINE' },
        { userId: users[0].id, title: 'Water wheat field', time: new Date(Date.now() + 4 * 60 * 60 * 1000), type: 'IRRIGATION' },
        { userId: users[1].id, title: 'Kids homework time', time: new Date(Date.now() + 3 * 60 * 60 * 1000), type: 'STUDY' },
        { userId: users[1].id, title: 'Vitamin D supplement', time: new Date(Date.now() + 6 * 60 * 60 * 1000), type: 'MEDICINE' },
        { userId: users[2].id, title: 'Apply pesticides', time: new Date(Date.now() + 8 * 60 * 60 * 1000), type: 'AGRICULTURE' },
        { userId: users[2].id, title: 'Diabetes check', time: new Date(Date.now() + 24 * 60 * 60 * 1000), type: 'HEALTH' },
        { userId: users[3].id, title: 'School assembly', time: new Date(Date.now() + 12 * 60 * 60 * 1000), type: 'EDUCATION' },
        { userId: users[3].id, title: 'Yoga class', time: new Date(Date.now() + 18 * 60 * 60 * 1000), type: 'HEALTH' },
    ];

    for (const reminder of reminders) {
        await prisma.reminder.create({ data: reminder });
    }

    console.log('✅ PostgreSQL database seeded successfully!');
    console.log(`📊 Created:
  - 1 Super Admin
  - 1 Admin  
  - 1 Authority
  - 20 Regular Users
  - 5 Hospitals
  - 5 Schools
  - 8 Crops
  - 10 Family Members
  - 8 Tasks
  - 8 Reminders`);

    console.log('🎉 PostgreSQL seeding process complete!');
}

main()
    .catch((e) => {
        console.error('❌ Master Seeding Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        process.exit(0);
    });
