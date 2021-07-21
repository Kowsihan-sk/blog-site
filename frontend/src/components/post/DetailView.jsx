import React from 'react'
import { Link } from 'react-router-dom';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';

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
    icons: {
        float: "right",
    },
    icon: {
        margin: 5,
        padding: 5,
        border: "1px solid #878787",
        borderRadius: 10
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
    }
}))

const DetailView = () => {
    const classes = useStyle();
    const url = "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";
    return (
        <>
            <Box className={classes.container}>
                <img src={url} alt="banner" className={classes.image} />
                <Box className={classes.icons}>
                    <Link to="/update"><Edit color="primary" className={classes.icon} /></Link>
                    <Delete color="error" className={classes.icon} />
                </Box>

                <Typography className={classes.heading}>Title of Blog</Typography>
                <Box className={classes.subheading}>
                    <Typography>Author: <span style={{ fontWeight: "600" }}>he who remains</span></Typography>
                    <Typography style={{ marginLeft: "auto" }}>21 may 3012</Typography>
                </Box>
                <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae ratione dolore fuga quam consequuntur velit laboriosam delectus corporis iste. Reiciendis, quod suscipit. Soluta rem eveniet alias veritatis, tempora blanditiis consequatur sit fuga corrupti dolorum quidem officia deleniti id vitae, dolor voluptatibus reiciendis? Dignissimos qui iste quia reiciendis dolore asperiores minima!</Typography>
            </Box>
        </>
    )
}

export default DetailView
