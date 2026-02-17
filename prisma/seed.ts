import { PrismaClient } from '@prisma/client';
import seedMongo from './src/lib/mongoSeed';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting Seeding...');

    // 1. Seed PostgreSQL (Prisma)
    const password = await bcrypt.hash('password123', 10);

    const user = await prisma.user.upsert({
        where: { email: 'admin@zyvanta.com' },
        update: {},
        create: {
            email: 'admin@zyvanta.com',
            name: 'Zyvanta Admin',
            password: password,
            role: 'ADMIN',
        },
    });

    console.log(`Created user with id: ${user.id}`);

    // Seed Crops
    const crops = [
        { name: 'Rice', variety: 'Basmati', season: 'Kharif', description: 'Major staple food.' },
        { name: 'Maize', variety: 'Hybrid-7', season: 'Zaid', description: 'Versatile cereal crop.' },
        { name: 'Wheat', variety: 'Durum', season: 'Rabi', description: 'Essential winter crop.' },
    ];

    for (const crop of crops) {
        await prisma.crop.create({ data: crop });
    }

    // Seed Hospitals
    await prisma.hospital.create({
        data: { name: 'City General Health Center', location: 'District A', contact: '011-222333' }
    });

    // Seed Schools
    await prisma.school.create({
        data: { name: 'Rural Excellence Academy', location: 'Village B', contact: '011-444555' }
    });

    console.log('✅ PostgreSQL Seeded Successfully');

    // 2. Seed MongoDB
    await seedMongo();

    console.log('🎉 Seeding Process Complete!');
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
