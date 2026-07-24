const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://neondb_owner:npg_7xogfKsvP4Lj@ep-withered-credit-ayr05lww.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
});

async function run() {
  try {
    await client.connect();
    console.log("Connected with pg successfully!");
    const res = await client.query('SELECT NOW()');
    console.log("Time from DB:", res.rows[0]);
  } catch (err) {
    console.error("Connection error:", err);
  } finally {
    await client.end();
  }
}

run();
