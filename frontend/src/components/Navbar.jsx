import React from 'react'
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    component: {
        background: "#fff",
        color: "#000"
    },
    container: {
        justifyContent: "center",
        "& > *": {
            padding: "20px"
        }
    },
    link: {
        textDecoration: "none",
        color: "inherit"
    }
});

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container} >
                <Link to="/" className={classes.link} ><Typography>HOME</Typography></Link>
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>LOGIN</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
