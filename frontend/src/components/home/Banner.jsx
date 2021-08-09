import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
    image: {
        background: `url(${'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})`,
        width: "100%",
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& :first-child": {
            fontSize: 68,
            color: "#fff",
            lineHeight: 1
        },
        "& :last-child": {
            fontSize: 20,
            backgroundColor: "#fff",
            padding: "0 60px"
        }
    }
})

const Banner = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.image}>
                <Typography>BLOG</Typography>
                <Typography>SITE</Typography>
            </Box>
        </>
    )
}

export default Banner
