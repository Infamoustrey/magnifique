import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Layout } from "./components/layout";

import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";

export const Routes = () => {
    return (
        <Layout>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        </Layout>
    );
};
