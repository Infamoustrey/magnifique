import React from "react";
import { Typography, Grid, TextField } from "@material-ui/core";

import { quotes } from "../raw/quotes";

export const Login = () => {
    return (
        <Grid container justify="center">
            <Grid item>
                <Typography
                    style={{ textAlign: "center", marginTop: "2rem" }}
                    variant="h4"
                >
                    Login
                </Typography>
                <TextField
                    fullWidth
                    label="Username"
                    style={{ marginTop: "2rem" }}
                />
                <TextField
                    fullWidth
                    label="Password"
                    style={{ marginTop: "2rem" }}
                />
                <Typography
                    style={{ textAlign: "center", marginTop: "2rem" }}
                    variant="h6"
                >
                    {quotes[Math.floor(Math.random() * quotes.length)]}
                </Typography>
            </Grid>
        </Grid>
    );
};
