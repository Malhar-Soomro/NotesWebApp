// rafce
import { Button, Container, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React, { useState } from 'react'

const UseStyle = makeStyles({
    title: {
        marginTop: "10px",
        "font-family": 'Chakra Petch'
    },
    button: {
        "font-family": 'Chakra Petch'
    },
    titleTextField: {
        marginTop: "15px",
        marginBottom: "15px"
    },
    detailTextField: {
        marginTop: "15px",
        marginBottom: "15px"
    }
})
const createPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [title, setTitle] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [detail, setDetail] = useState("");

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [titleError, setTitleError] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [detailError, setDetailError] = useState(false);


    const onClickHandler = () => {
        if (title && detail) {
            console.log(title, detail);
        }
    }

    const classes = UseStyle();
    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                className={classes.title}
            >
                Create a new Note
            </Typography>

            <TextField
                className={classes.titleTextField}
                label="Title"
                variant="outlined"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                error={titleError}
                required
                fullWidth
            />
            <TextField
                className={classes.detailTextField}
                label="Details"
                variant="outlined"
                value={detail}
                onChange={(event) => setDetail(event.target.value)}
                error={detailError}
                required
                fullWidth
                multiline
                rows={3}
            />
            <Button

                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={onClickHandler}
            >
                Submit
            </Button>
        </Container >
    )
}

export default createPage
