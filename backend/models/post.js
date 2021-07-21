import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    categories: {
        type: String,
        required: false,
    },
    createDate: {
        type: Date
    }
})

const post = mongoose.model('post', postSchema);

export default post;