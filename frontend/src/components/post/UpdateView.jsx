import React from 'react';
import { Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

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
    form: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10
    },
    textField: {
        flex: 1,
        margin: "0 30px",
        fontSize: 25,
    },
    textArea: {
        width: "100%",
        marginTop: 50,
        border: "none",
        fontSize: 18,
        "&:focus-visible": {
            outline: "none"
        }
    }
}))

const CreateView = () => {
    const classes = useStyle();
    const url = "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";
    return (
        <>
            <Box className={classes.container}>
                <img src={url} alt="banner" className={classes.image} />

                <FormControl className={classes.form}>
                    <AddCircle fontSize="large" color="action" />
                    <InputBase placeholder="Title" className={classes.textField} />
                    <Button variant="contained" color="primary">Publish</Button>
                </FormControl>

                <TextareaAutosize
                    minRows={5}
                    placeholder="Tell your story..."
                    className={classes.textArea}
                />
            </Box>
        </>
    )
}

export default CreateView
