import { Box, Button, makeStyles, TextareaAutosize } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthContext';
import { getComments, newComment } from '../service/api';
import Comment from './Comment';

const useStyles = makeStyles({
    component: {
        marginTop: 100,
        display: 'flex',
        marginBottom: 60
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
    const url = `https://cdn0.iconfinder.com/data/icons/business-and-marketing-21/32/finance_profile_person-512.png`;

    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);
    const { currentUser } = useAuth();

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
            name: currentUser.displayName,
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
