import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, FormControl, InputBase, InputLabel, makeStyles, Select, TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { createPost, uploadFile } from '../../service/api';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../Navbar';

const useStyle = makeStyles((theme) => ({
    container: {
        padding: "0 100px",
        [theme.breakpoints.down('md')]: {
            padding: "0 3px"
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
    },
    select: {
        marginRight: 20,
        width: 100
    }
}))

const initialValues = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
};

const CreateView = () => {
    const classes = useStyle();

    const history = useHistory();
    const [post, setPost] = useState(initialValues);
    const [file, setFile] = useState('');
    // eslint-disable-next-line
    const [imageURL, setImageURL] = useState('');

    const { currentUser } = useAuth();

    const url = post.picture || "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

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
        post.username = currentUser.displayName;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
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
                    <FormControl className={classes.select}>
                        <InputLabel >Category</InputLabel>
                        <Select
                            native
                            onChange={(e) => handleChange(e)}
                            name="categories"
                        >
                            <option aria-label="None" value="" />
                            <option value={'Tech'}>Tech</option>
                            <option value={'Music'}>Music</option>
                            <option value={'Movies'}>Movies</option>
                            <option value={'Fashion'}>Fashion</option>
                            <option value={'Sports'}>Sports</option>
                        </Select>
                    </FormControl>
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
