import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import PasswordForget from "./PasswordForget";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/Home`}
            component={Home}
          />
          <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route
            path={`${process.env.PUBLIC_URL}/forgot-password`}
            component={PasswordForget}
          />
          <Route path={`${process.env.PUBLIC_URL}/signup`} component={SignUp} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
