import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Grid } from '@material-ui/core'
import Post from './Post'

import { getAllPosts } from '../../service/api';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            let data = await getAllPosts(search);
            // console.log(data);
            setPosts(data);
        }
        fetchData();
    }, [search]);

    return (
        <>
            {Array.isArray(posts) && posts.map(post => (
                <Grid item lg={3} sm={4} xs={12}>
                    <Link to={`/details/${post._id}`} style={{ textDecoration: "none", color: "inherit" }} >
                        <Post post={post} />
                    </Link>
                </Grid>
            ))}
        </>
    )
}

export default Posts
