import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Utils/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <h1>Hello</h1>
          </Route>
          {/* Add more routes here */}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
