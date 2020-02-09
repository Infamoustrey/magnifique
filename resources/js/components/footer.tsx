import React from "react";

import { AppBar, Toolbar } from "@material-ui/core";

import { Player } from "./player";

export const Footer = () => {
    return (
        <AppBar color="inherit" position="static">
            <Toolbar color="inherit">
                <Player />
            </Toolbar>
        </AppBar>
    );
};
