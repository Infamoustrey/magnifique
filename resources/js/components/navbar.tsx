import React from "react";

import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justify="space-between">
                    <Typography variant="h5">Magnifique</Typography>
                    <Button color="inherit">Logout</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
