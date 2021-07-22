import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { getPost, updatePost } from '../../service/api';
import { useHistory } from 'react-router-dom';

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
    createdDate: new Date()
};

const UpdateView = ({ match }) => {
    const classes = useStyle();
    const url = "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";

    const history = useHistory();
    const [post, setPost] = useState(initialValues);
    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            // console.log(data);
            setPost(data);
        }
        fetchData();
    }, []);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const updateBlog = async () => {
        await updatePost(match.params.id, post);
        history.push(`/details/${match.params.id}`);
    }

    return (
        <>
            <Box className={classes.container}>
                <img src={post.picture || url} alt="banner" className={classes.image} />

                <FormControl className={classes.form}>
                    <AddCircle fontSize="large" color="action" />
                    <InputBase
                        name="title"
                        placeholder="Title"
                        className={classes.textField}
                        value={post.title}
                        onChange={(e) => { handleChange(e) }}
                    />
                    <Button onClick={() => updateBlog()} variant="contained" color="primary">Update</Button>
                </FormControl>

                <TextareaAutosize
                    name="description"
                    minRows={5}
                    placeholder="Tell your story..."
                    className={classes.textArea}
                    value={post.description}
                    onChange={(e) => { handleChange(e) }}
                />
            </Box>
        </>
    )
}

export default UpdateView
