import axios from "axios";

const URL = "http://localhost:5000";

export const createPost = async (post) => {
    try {
        return await axios.post(`${URL}/create`, post);
    } catch (error) {
        console.log("Error while calling createPost API ", error);
    }
}