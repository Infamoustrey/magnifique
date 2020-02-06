import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./store";

import { Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

import { Content } from "./components/content";

const Application = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Grid container direction="column" style={{ height: "100%" }}>
                    <Grid item>
                        <Navbar />
                    </Grid>
                    <Grid item style={{ flexGrow: 1 }}>
                        <Content />
                    </Grid>
                    <Grid item>
                        <Footer />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Provider>
    );
};

ReactDOM.render(<Application />, document.getElementById("root"));
