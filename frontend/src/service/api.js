import axios from "axios";

const URL = "http://localhost:5000";

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
        return await axios.delete(`${URL}/delete/${id}`);
    } catch (error) {
        console.log("Error while calling deletePost API ", error);
    }
}