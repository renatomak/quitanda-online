import React from "react";
import { Cart } from "react-bootstrap-icons";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./pages/components/Footer";
import Header from "./pages/components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ShoppCart from "./pages/ShoppCart";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/registration" exact component={Registration} />
        <Route path="/login" exact component={Login} />
        <Route path="/shopp-cart" exact component={ShoppCart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
