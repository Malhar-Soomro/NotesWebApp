import { makeStyles } from '@material-ui/styles'
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import { format } from 'date-fns'
import Drawer from '@material-ui/core/Drawer';

const drawerWidth = 240;
const useStyle = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    page: {
        backgroundColor: "#f4f4f4",
        width: "100%",
        marginTop: "60px"
    },
    appbar: {
        backgroundColor: "#ffff",
        width: `calc(100% - ${drawerWidth}px)`
    },
    drawer: {
        width: drawerWidth
    },
    paperDrawer: {
        width: drawerWidth,
    },
    typo: {
        margin: "20px"
    }
}));

const Layout = ({ children }) => {
    const classes = useStyle();
    return (


        <div className={classes.root}>
            <AppBar
                className={classes.appbar}
                color="transparent"
                elevation={0}
            >
                <Toolbar>
                    <Typography
                        variant="h5"
                    >
                        Today is {format(new Date(), 'do MMMM Y')}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
            >
                <div className={classes.drawer}>
                    <Typography
                        className={classes.typo}
                        align="center"
                        variant="h5">
                        Notes Web App
                    </Typography>
                </div>

            </Drawer>

            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

export default Layout
