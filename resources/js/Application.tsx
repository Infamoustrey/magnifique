import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./store";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./theme";

import { Routes } from "./routes";

const Application = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </Provider>
    );
};

ReactDOM.render(<Application />, document.getElementById("root"));
