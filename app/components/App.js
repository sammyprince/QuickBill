// @flow
import React, { Component } from "react";

import NavBar from "https://sammyprince.github.io/QuickBill/common/NavBar";
import HomePage from "https://sammyprince.github.io/QuickBill/home/HomePage";
import Dashboard from "https://sammyprince.github.io/QuickBill/dashboard/Dashboard";
import Preview from "https://sammyprince.github.io/QuickBill/dashboard/Preview";

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route exact path="https://sammyprince.github.io/QuickBillQuickBill/" component= />
                    <Route path="https://sammyprince.github.io/QuickBill/QuickBill/dashboard" component= />
                    <Route path="https://sammyprince.github.io/QuickBill/QuickBill/preview" component=</Route>
                </div>
            </Router>
        );
    }
}
