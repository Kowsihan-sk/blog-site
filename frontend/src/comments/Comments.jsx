import { Box, Button, makeStyles, TextareaAutosize } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getComments, newComment } from '../service/api';
import Comment from './Comment';

const useStyles = makeStyles({
    component: {
        marginTop: 100,
        display: 'flex',
        marginBottom: 40
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: '50%'
    },
    textarea: {
        width: '100%',
        margin: '0 20px'
    },
    button: {
        height: 40
    }
});

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}

const Comments = ({ post }) => {
    const classes = useStyles();
    const url = `https://static.thenounproject.com/png/12017-200.png`;

    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const getData = async () => {
            let response = await getComments(post._id);
            setComments(response);
        }
        getData();
    }, [post, toggle]);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: post.username,
            postId: post._id,
            comments: e.target.value
        })
    }

    const postComment = async () => {
        await newComment(comment);
        setToggle(prev => !prev);
    }

    return (
        <Box>
            <Box className={classes.component} >
                <img src={url} alt="dp" className={classes.image} />
                <TextareaAutosize
                    className={classes.textarea}
                    minRows={5}
                    onChange={(e) => handleChange(e)} />
                <Button variant="contained" color="primary" size="medium" className={classes.button}
                    onClick={() => postComment()} >Post</Button>
            </Box>
            {
                comments && comments.map(comment => (
                    <Comment comment={comment} setToggle={setToggle} />
                ))
            }
        </Box>
    )
}

export default Comments
