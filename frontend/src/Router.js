import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pages from './pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Pages.Header />
      <Switch>
        <Route path="/" exact component={Pages.Home} />
        <Route path="/contact" component={Pages.Contact} />
        <Route path="/registration" component={Pages.Registration} />
        <Route path="/recover-password" component={Pages.RecoverPassword} />
        <Route path="/login" component={Pages.Login} />
        <Route path="/shopp-cart" component={Pages.ShoppCart} />
        <Route path="/close-shopp-cart" component={Pages.CloseShoppCart} />
        <Route path="/close-address" component={Pages.CloseAddress} />
        <Route path="/close-payment" component={Pages.ClosePayment} />
        <Route path="/close-order" component={Pages.CloseOrder} />
        <Route path="/privacy-policy" component={Pages.PrivacyPolicy} />
        <Route path="/terms-of-use" component={Pages.TermsOfUse} />
        <Route path="/who-we-are" component={Pages.WhoWeAre} />
        <Route path="/exchanges-retuns" component={Pages.ExchangesRetuns} />
      </Switch>
      <Pages.Footer />
    </BrowserRouter>
  );
};

export default Router;
