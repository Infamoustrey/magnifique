import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useSelector } from "react-redux";

import { Login } from "../pages/login";
import { Grid } from "@material-ui/core";
import { SideBar } from "./side-bar";
import { AppState } from "../store";

export const Content = () => {
    const showSidebar = useSelector(
        (state: AppState) => state.interface.showSideBar
    );

    return (
        <Grid container>
            <Grid item>
                <SideBar />
            </Grid>
            <Grid item>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                    </Switch>
                </Router>
            </Grid>
        </Grid>
    );
};
