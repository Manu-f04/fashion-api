const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb+srv://emanuelle2023325655_db_user:Manu1234@fashion-cluster.0vzubew.mongodb.net/?retryWrites=true&w=majority&appName=fashion-cluster";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log("✅ Conectado ao MongoDB!");
  } catch (err) {
    console.error("❌ Erro:", err);
  } finally {
    await client.close();
  }
}

run();