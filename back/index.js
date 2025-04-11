const express = require('express');
const cors = require('cors');
const app = express();
const { pool } = require('./db/db.js')
const { obtenerUsuarios, añadirUsuarios } = require('./consultas')

app.listen(3000, console.log('Servidor encendido'));

app.use(express.json());
app.use(cors());


app.get("/posts", async (req, res) => {
    const users = await obtenerUsuarios()
    res.json(users)
});

app.post("/posts", async (req, res) => {
    const {  titulo, img, descripcion, likes } = req.body
    await añadirUsuarios(titulo, img, descripcion, likes)
    res.status(201).send('post añadido con éxito')

}) 