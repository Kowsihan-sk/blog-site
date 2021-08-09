import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

const URL = `http://localhost:5000`;

export const createPost = async (post) => {
    try {
        return await axios.post(`${URL}/create`, post);
    } catch (error) {
        console.log("Error while calling createPost API ", error);
    }
}

export const getAllPosts = async (param) => {
    try {
        let response = await axios.get(`${URL}/posts${param}`);
        return response.data;
    } catch (error) {
        console.log("Error while calling getAllPosts API ", error);
    }
}

export const getPost = async (id) => {
    try {
        let response = await axios.get(`${URL}/post/${id}`);
        return response.data;
    } catch (error) {
        console.log("Error while calling getPost API ", error);
    }
}

export const updatePost = async (id, post) => {
    try {
        return await axios.post(`${URL}/update/${id}`, post);
    } catch (error) {
        console.log("Error while calling updatePost API ", error);
    }
}

export const deletePost = async (id) => {
    try {
        await axios.delete(`${URL}/delete/${id}`);
    } catch (error) {
        console.log("Error while calling deletePost API ", error);
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${URL}/file/upload`, data);
    } catch (error) {
        console.log("Error while uploading Image ", error);
    }
}

export const newComment = async (data) => {
    try {
        return await axios.post(`${URL}/comment/new`, data);
    } catch (error) {
        console.log('Error while calling newComment API', error);
    }
}

export const getComments = async (id) => {
    try {
        let response = await axios.get(`${URL}/comments/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getComment API', error);
    }
}

export const deleteComment = async (id) => {
    try {
        return await axios.delete(`${URL}/comment/delete/${id}`);
    } catch (error) {
        console.log('Error while calling deleteComment API', error);
    }
}