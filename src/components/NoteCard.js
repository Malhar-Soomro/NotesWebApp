import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import { orange, red } from '@material-ui/core/colors';
import { DeleteOutlineOutlined } from '@material-ui/icons';
import React from 'react'

const useStyle = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(2),
        marginTop: 20,
        border: "1px grey solid"
    },
    avatar: {
        backgroundColor: orange[500],
    }
}))
const NoteCard = ({ title, category, detail }) => {
    const classes = useStyle();
    return (

        <Card
            className={classes.card}
        // elevation={1}
        >
            <CardHeader
                avatar={

                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton>
                        <DeleteOutlineOutlined />
                    </IconButton>
                }
                title={title}
                subheader={category}

            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {detail}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NoteCard
