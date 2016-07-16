import * as React from "react";
import {Router, Route, browserHistory} from "react-router";

import "./MainApp.less";
import {Component as WelcomeComponent} from "./page/Welcome";
import {Component as EditComponent} from "./page/Edit";

export class MainApp extends React.Component<{}, {}>
{
    render()
    {
        var src = require("./MainApp_logo.png");
        return (
            <div className="component-main-app">
                <h1><img src={src} /> write</h1>
                <div className="container-fluid">
                    <Router history={browserHistory}>
                        <Route path="/" component={WelcomeComponent} />
                        <Route path="/edit" component={EditComponent} />
                    </Router>
                </div>
           </div>
        );
    }
}
