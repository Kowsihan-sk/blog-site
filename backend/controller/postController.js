import Post from "../models/post.js";

export const createPost = async (req, res) => {
    console.log(req.body);
    try {
        const post = await new Post(req.body);
        post.save();

        res.status(200).json("blog created successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}