import Comment from "../models/comment.js";

export const newComment = async (req, res) => {
    try {
        const comment = new Comment(req.body);
        comment.save();

        res.status(200).json('Comment saved successfully');
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.id });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteComment = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        await Comment.deleteOne();
        res.status(200).json('comment deleted successfully');;
    } catch (error) {
        res.status(500).json(error);
    }
}