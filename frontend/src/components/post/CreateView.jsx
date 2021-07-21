import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { createPost } from '../../service/api';

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
    username: 'park dong ho',
    categories: 'All',
    createDate: new Date()
};

const CreateView = () => {
    const classes = useStyle();
    const url = "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";

    const history = useHistory();
    const [post, setPost] = useState(initialValues);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const savePost = async () => {
        await createPost(post);
        history.push("/");
    }

    return (
        <>
            <Box className={classes.container}>
                <img src={url} alt="banner" className={classes.image} />

                <FormControl className={classes.form}>
                    <AddCircle fontSize="large" color="action" />
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
