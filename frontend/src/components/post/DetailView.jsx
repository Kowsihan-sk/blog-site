import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { getPost, deletePost, deleteComments } from '../../service/api';
import { useAuth } from '../../contexts/AuthContext';
import Navbar from '../Navbar';
import Comments from '../../comments/Comments';

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
    icons: {
        float: "right",
    },
    icon: {
        margin: 5,
        padding: 5,
        border: "1px solid #878787",
        borderRadius: 10,
        cursor: "pointer"
    },
    heading: {
        fontSize: 38,
        fontWeight: 600,
        textAlign: "center",
        margin: "50px 0 10px 0"
    },
    subheading: {
        display: "flex",
        color: "#878787",
        margin: "20px 0",
        [theme.breakpoints.down('sm')]: {
            display: "block"
        }
    },
    link: {
        textDecoration: "none",
        color: "inherit"
    }
}))

const DetailView = ({ match }) => {
    const classes = useStyle();
    const url = "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

    const history = useHistory();
    const [post, setPost] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(match.params.id);
            // console.log(data);
            setPost(data);
        }
        fetchData();
        // eslint-disable-next-line
    }, []);

    const deleteBlog = async () => {
        await deleteComments(post._id);
        await deletePost(post._id);
        history.push("/");
    };

    return (
        <>
            <Navbar />
            <Box className={classes.container}>
                <img src={post.picture || url} alt="banner" className={classes.image} />
                <Box className={classes.icons}>
                    {
                        currentUser.displayName === post.username &&
                        <>
                            <Link to={`/update/${post._id}`}><Edit color="primary" fontSize="large" className={classes.icon} /></Link>
                            <Delete onClick={() => deleteBlog()} color="error" fontSize="large" className={classes.icon} />
                        </>
                    }
                </Box>

                <Typography className={classes.heading}>{post.title}</Typography>
                <Box className={classes.subheading}>
                    <Link to={`/?username=${post.username}`} className={classes.link} >
                        <Typography>Author: <span style={{ fontWeight: "600" }}>{post.username}</span></Typography>
                    </Link>
                    <Typography style={{ marginLeft: "auto" }}>{new Date(post.createdDate).toDateString()}</Typography>
                </Box>
                <Typography>{post.description}</Typography>
                <Comments post={post} />
            </Box>
        </>
    )
}

export default DetailView
