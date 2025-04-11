const { pool } = require('./db/db')

const obtenerUsuarios = async () => {
    const { rows } = await pool.query('SELECT * FROM posts')
    console.log(rows)
    return rows
}

const añadirUsuarios = async ( titulo, img, descripcion, likes ) => {
    const consulta = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)'
    const values = [ titulo, img, descripcion, likes]
    result = await pool.query(consulta, values)
    console.log('Usuario agregado')
}

module.exports = { obtenerUsuarios, añadirUsuarios }

