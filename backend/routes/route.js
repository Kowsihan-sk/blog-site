import express from "express";

const router = express.Router();

import { createPost, getAllPosts, getPost, updatePost, deletePost } from "../controller/postController.js";
import { uploadImage, getImage } from "../controller/imageController.js";
import upload from "../utils/upload.js";
import { newComment, getComments, deleteComment } from "../controller/commentController.js";

router.post("/create", createPost);

router.get("/posts", getAllPosts);
router.get("/post/:id", getPost);

router.post("/update/:id", updatePost)
router.delete("/delete/:id", deletePost);

router.post("/file/upload", upload.single('file'), uploadImage);
router.get("/file/:filename", getImage);

router.post('/comment/new', newComment);
router.get('/comments/:id', getComments);
router.delete('/comment/delete/:id', deleteComment);

export default router;