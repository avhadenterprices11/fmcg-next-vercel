import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import path from 'path';

// Load .env file
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('MONGODB_URI is not defined in .env');
    process.exit(1);
}

async function testConnection() {
    console.log('Testing MongoDB connection...');
    try {
        await mongoose.connect(MONGODB_URI!);
        console.log('✅ MongoDB connection successful!');

        // List collections as a sanity check
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('Available collections:', collections.map(c => c.name));

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error);
        process.exit(1);
    }
}

testConnection();
