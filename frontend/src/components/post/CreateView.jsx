import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { createPost, uploadFile } from '../../service/api';
import Navbar from '../Navbar';

const useStyle = makeStyles((theme) => ({
    container: {
        padding: "0 100px",
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    image: {
        width: "100%",
        height: "50vh",
        objectFit: "cover"
    },
    form: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10
    },
    textField: {
        flex: 1,
        margin: "0 30px",
        fontSize: 25,
    },
    textArea: {
        width: "100%",
        marginTop: 50,
        border: "none",
        fontSize: 18,
        "&:focus-visible": {
            outline: "none"
        }
    }
}))

const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: 'kowsihan',
    categories: 'All',
    createdDate: new Date()
};

const CreateView = () => {
    const classes = useStyle();

    const history = useHistory();
    const [post, setPost] = useState(initialValues);
    const [file, setFile] = useState('');
    // eslint-disable-next-line
    const [imageURL, setImageURL] = useState('');

    const url = post.picture || "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data);
                // console.log(image);
                post.picture = image.data;
                setImageURL(image.data);
            }
        }
        getImage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const savePost = async () => {
        await createPost(post);
        history.push("/");
    }

    return (
        <>
            <Navbar />
            <Box className={classes.container}>
                <img src={url} alt="banner" className={classes.image} />

                <FormControl className={classes.form}>
                    <label htmlFor="fileInput">
                        <AddCircle fontSize="large" color="action" style={{ cursor: "pointer" }} />
                    </label>
                    <input type="file" name="" id="fileInput" style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])} />
                    <InputBase
                        onChange={(e) => handleChange(e)}
                        placeholder="Title"
                        className={classes.textField}
                        name="title"
                    />
                    <Button onClick={() => savePost()} variant="contained" color="primary">Publish</Button>
                </FormControl>

                <TextareaAutosize
                    onChange={(e) => handleChange(e)}
                    minRows={5}
                    placeholder="Tell your story..."
                    className={classes.textArea}
                    name="description"
                />
            </Box>
        </>
    )
}

export default CreateView
