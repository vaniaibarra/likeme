const express = require('express');
const cors = require('cors');
const app = express();
const { pool } = require('./db/db.js')
const routesPosts = require('./routes/postsRoutes.js')

app.listen(3000, console.log('Servidor encendido'));

app.use(express.json());
app.use(cors());

app.use('/posts', routesPosts)


