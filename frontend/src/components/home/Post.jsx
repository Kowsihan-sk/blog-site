import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    container: {
        height: "350px",
        margin: "10px",
        border: "1px solid #d3cede",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
            padding: "0 5px 5px 5px"
        }
    },
    image: {
        height: "150px",
        width: "100%",
        objectFit: "cover",
        borderRadius: "10px 10px 0 0",
    },
    heading: {
        fontSize: "18px",
        fontWeight: 600
    },
    text: {
        color: "#878787",
        fontSize: "12px"
    },
    detail: {
        fontSize: "14px",
        wordBreak: "break-word"
    }
})

const Post = ({ post }) => {
    const classes = useStyles();
    const url = post.picture || "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";
    return (
        <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image} />
            <Typography className={classes.text}>{post.categories}</Typography>
            <Typography className={classes.heading}>{post.title}</Typography>
            <Typography className={classes.text}>author: {post.username} </Typography>
            <Typography className={classes.detail} >{post.description}</Typography>
        </Box>
    )
}

export default Post
