const { MongoClient } = require('mongodb');

// URI from your .env
const uri = "mongodb+srv://avhadenterprisespc2_db_user:dT4FUSCRYnCXRlJu@cluster0.j4eiepn.mongodb.net/?appName=Cluster0";

async function run() {
    const client = new MongoClient(uri);
    try {
        console.log("Connecting to MongoDB...");
        await client.connect();
        console.log("✅ Successfully connected to MongoDB!");

        const admin = client.db().admin();
        const serverStatus = await admin.serverStatus();
        console.log("Server version:", serverStatus.version);

        await client.close();
    } catch (err) {
        console.error("❌ Connection failed:", err.message);
    }
}

run();
