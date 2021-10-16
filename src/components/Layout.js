import { makeStyles } from '@material-ui/styles'
import React from 'react'


const useStyle = makeStyles({
    layout: {
        backgroundColor: "#f4f4f4",
        width: "100%"
    }
});
const Layout = ({ children }) => {
    const classes = useStyle();
    return (
        <div>

            <div className={classes.layout}>
                {children}
            </div>
        </div>
    )
}

export default Layout
