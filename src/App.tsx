import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routes from "@routes/index";

const App = () => {
    return (
        <Router>
            <Switch>
                {routes.map((router, index) => {
                    return (
                        <Route
                            key={index}
                            path={router.path}
                            exact={router.exact}
                            component={router.component}
                        ></Route>
                    );
                })}
            </Switch>
        </Router>
    );
};

export default App;
