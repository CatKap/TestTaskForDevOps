require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
});


// Добавим health endpoint
app.get('/health', async (req, res) => {
  
  res.status(200).json({'status':'Ok'});
});

app.get('/api/time', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        const currentTime = result.rows[0].now;
        res.json({ time: currentTime });
    } catch (err) {
        console.error('Error fetching time:', err);
        res.status(500).json({ error: 'Failed to fetch time' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
