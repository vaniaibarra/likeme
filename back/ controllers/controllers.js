const { error } = require('console');
const { obtenerPost, añadirPost, borrarPost, likePost } = require('../models/postsModel.js')

const getPosts = async (req, res) => {
    try {
        const posts = await obtenerPost();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los posts', detalle: error.message });
    }
}


const addPost = async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    try {
        await añadirPost(titulo, img, descripcion, likes);
        res.status(201).send('Post añadido con éxito');
    } catch (error) {
        res.status(500).json({ error: 'Error al añadir el post', detalle: error.message });
    }
}


const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const resultado = await borrarPost(id);
        if (resultado.rowCount === 0) {
            return res.status(404).json({error: 'Post no encontrado'});
        }
        res.status(204).send()
    } catch (error) {
        res.status(500).json({error: "No se pudo eliminar el post", detalle: error.message});
    }
}

const putLike = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await likePost(id);
      if (result.rowCount === 0) return res.status(404).json({ error: 'Post no encontrado' });
      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: 'Error al dar like', detalle: error.message });
    }
  };

  const updateLikes = async (req, res) => {
    const { id } = req.params; 

    try {
        const resultado = await actualizarLikes(id); 
        res.status(200).json({ message: "Like agregado", post: resultado }); 
    } catch (error) {
        res.status(500).json({ error: "No se pudo actualizar el like", detalle: error.message }); 
    }
};
  

module.exports = { getPosts, addPost, deletePost, putLike, updateLikes }