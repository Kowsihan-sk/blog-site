import React from 'react'
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
    }
});

const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.component}>
            <Toolbar className={classes.container} >
                <Typography>HOME</Typography>
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>LOGIN</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
