import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./pages/components/Footer";
import Header from "./pages/components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/registration" exact component={Registration} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
