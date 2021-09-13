import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./pages/components/Footer";
import Header from "./pages/components/Header";
import Contato from "./pages/Contato";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contato" exact component={Contato} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
