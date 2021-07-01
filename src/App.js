import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import HomePage from "./pages/home-page/HomePage";
import PhonePage from "./pages/phone-page/PhonePage";
import OperatorsPage from "./pages/operators-page/OperatorsPage";
import ProductsPage from "./pages/products-page/ProductsPage";
import TopupSuccess from "./pages/topup-success/TopupSuccess";
import NotFound from "./pages/not-found/NotFound";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/phone" component={PhonePage} />
        <Route path="/operators" component={OperatorsPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/topup" component={TopupSuccess} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
