import React from "react";

import { useSelector } from "react-redux";

import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { AppState } from "../store";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: theme.mixins.toolbar
    })
);

export const SideBar = () => {
    const classes = useStyles();

    const showSidebar = useSelector(
        (state: AppState) => state.interface.showSideBar
    );

    return (
        <Drawer
            id="side-bar"
            variant="persistent"
            anchor="left"
            open={showSidebar}
        >
            <div className={classes.toolbar} />
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
            <div className={classes.toolbar} />
        </Drawer>
    );
};
