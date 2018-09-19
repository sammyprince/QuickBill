// @flow
import React, { Component } from "react";

import NavBar from "./common/NavBar";
import HomePage from "./home/HomePage";
import Dashboard from "./dashboard/Dashboard";
import Preview from "./dashboard/Preview";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route exact path="https://sammyprince.github.io/QuickBillQuickBill/" component= />
                    <Route path="/QuickBill/dashboard" component= />
                    <Route path="/QuickBill/preview" component=</Route>
                </div>
            </Router>
        );
    }
}
