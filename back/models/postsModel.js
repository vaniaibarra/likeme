const { pool } = require('../db/db')

const obtenerPost = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM posts');
        console.log(rows);
        return rows;
    } catch (error) {
        console.error('Error al obtener los posts:', error.message);
        throw error;
    }
}


const añadirPost = async (titulo, img, descripcion, likes = 0) => {
    try {
        const consulta = 'INSERT INTO posts VALUES (DEFAULT, $1, $2, $3, $4)';
        const values = [titulo, img, descripcion, likes];
        const result = await pool.query(consulta, values);
        console.log('Post agregado');
        return result;
    } catch (error) {
        console.error('Error al añadir el post:', error.message);
        throw error;
    }
}


const borrarPost = async (id) => {
    try {
        const query = 'DELETE FROM posts WHERE id = $1'
        const result = await pool.query(query, [id]);
        return result;
    } catch (error) {
        throw error;
    }
}

const likePost = async (id) => {
    try {
      const consulta = 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *';
      const result = await pool.query(consulta, [id]);
      return result;
    } catch (error) {
      console.error('Error al dar like:', error.message);
      throw error;
    }
  };


  const actualizarLikes = async (id) => {
    try {
        
        const consulta = 'UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *';
        const values = [id];
        
        const { rows } = await pool.query(consulta, values); 
        
        if (rows.length === 0) {
            throw new Error("Post no encontrado"); 
        }
        
        return rows[0]; 
    } catch (error) {
        console.error("Error al actualizar los likes:", error);
        throw error; 
    }
};

module.exports = { obtenerPost, añadirPost, borrarPost, likePost, actualizarLikes }

