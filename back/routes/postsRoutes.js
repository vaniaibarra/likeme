const express = require('express');
const routes = express.Router();
const { getPosts, addPost, deletePost, putLike, updateLikes } = require('../ controllers/controllers.js')

routes.get("/", getPosts);

routes.post("/", addPost);

routes.delete("/:id", deletePost);

routes.put("/like/:id", putLike)

routes.put("/likes/:id", updateLikes )

module.exports = routes;