import express from "express";

const router = express.Router();

import { createPost, getAllPosts, getPost, updatePost, deletePost } from "../controller/postController.js";

router.post("/create", createPost);

router.get("/posts", getAllPosts);

router.get("/post/:id", getPost);

router.post("/update/:id", updatePost)

router.delete("/delete/:id", deletePost);

export default router;