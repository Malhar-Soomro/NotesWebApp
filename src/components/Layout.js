import { makeStyles } from '@material-ui/styles'
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import { format } from 'date-fns'

const useStyle = makeStyles({
    layout: {
        backgroundColor: "#f4f4f4",
        width: "100%"
    },
    appbar: {
        backgroundColor: "#ffff",
        // marginBottom: 8
    }
});

const Layout = ({ children }) => {
    const classes = useStyle();
    return (
        <div className={classes.layout}>
            <AppBar
                className={classes.appbar}
                position="static"
                color="transparent"
                elevation={0}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                    >
                        Today is {format(new Date(), 'do MMMM Y')}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout
