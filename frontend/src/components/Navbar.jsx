import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core"
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

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
    const [error, setError] = useState("");
    const { logout } = useAuth();
    const history = useHistory();

    const handleLogOut = async () => {
        setError("");
        try {
            await logout();
            history.push("/login");
        } catch (error) {
            setError("Failed to log out");
        }
    };

    return (
        <>
            <AppBar className={classes.component}>
                <Toolbar className={classes.container} >
                    <Link to="/" className={classes.link} ><Typography>HOME</Typography></Link>
                    <Typography>ABOUT</Typography>
                    <Typography>CONTACT</Typography>
                    <Typography><button onClick={handleLogOut}>LOGOUT</button></Typography>
                </Toolbar>
            </AppBar>
            {error && <Alert variant="danger">{error}</Alert>}
        </>
    )
}

export default Navbar
