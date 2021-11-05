import { makeStyles } from '@material-ui/styles'
import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import { format } from 'date-fns'
import Drawer from '@material-ui/core/Drawer';
import { AddCircleOutline, SubjectOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';



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
        marginTop: "20px"
    },
    listItem: {
        backgroundColor: "#D3D3D3"
    }
}));

const Layout = ({ children }) => {
    const history = useHistory();
    const location = useLocation();
    const classes = useStyle();
    const menuItems = [
        {
            text: "My Notes",
            path: "/",
            icon: <SubjectOutlined
                color="secondary"
            />
        },
        {
            text: "Create Note",
            path: "/create",
            icon: <AddCircleOutline
                color="secondary" />
        }
    ]
    return (
        <div className={classes.root}>
            <AppBar
                className={classes.appbar}
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

                    <List>
                        {menuItems.map((item) => {
                            return (
                                <ListItem
                                    button
                                    onClick={() => history.push(item.path)}
                                >
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            )
                        })}
                    </List>



                </div>

            </Drawer>

            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

export default Layout
