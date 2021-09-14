import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ClosePayment from './pages/ ClosePayment';
import CloseAddress from './pages/CloseAddress';
import CloseOrder from './pages/CloseOrder';
import CloseShoppCart from './pages/CloseShoppCart';
import Footer from './pages/components/Footer';
import ExchangesRetuns from './pages/components/Footer/ExchangesRetuns';
import PrivacyPolicy from './pages/components/Footer/PrivacyPolicy';
import TermsOfUse from './pages/components/Footer/TermsOfUse';
import WhoWeAre from './pages/components/Footer/WhoWeAre';
import Header from './pages/components/Header';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ShoppCart from './pages/ShoppCart';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/shopp-cart" component={ShoppCart} />
        <Route path="/close-shopp-cart" component={CloseShoppCart} />
        <Route path="/close-address" component={CloseAddress} />
        <Route path="/close-payment" component={ClosePayment} />
        <Route path="/close-order" component={CloseOrder} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-use" component={TermsOfUse} />
        <Route path="/who-we-are" component={WhoWeAre} />
        <Route path="/exchanges-retuns" component={ExchangesRetuns} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
