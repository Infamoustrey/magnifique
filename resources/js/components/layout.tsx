import React from "react";

import { Grid, Container } from "@material-ui/core";

import { Navbar } from "./navbar";
import { Footer } from "./footer";

export const Layout = ({ children }) => {
    return (
        <Grid container direction="column" style={{ height: "100%" }}>
            <Grid item>
                <Navbar />
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
                <Container maxWidth="md">{children}</Container>
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    );
};
