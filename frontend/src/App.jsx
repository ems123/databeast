import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Aos from "aos";

import Home from "./pages/Home";
import CryptoDetail from "./pages/CryptoDetail";
import MarketingDetail from "./pages/MarketingDetail";
import TryNow from "./pages/TryNow";
import RealEstateDetail from "./pages/RealEstateDetail";
import SportsDetail from "./pages/SportsDetail";
import TelecomDetail from "./pages/TelecomDetail";
import AgricultureDetail from "./pages/AgricultureDetail";
import FitnessDetail from "./pages/FitnessDetail";
import CryptocrisisDetail from "./pages/CryptocrisisDetail";

import "aos/dist/aos.css";
import "./assets/css/General.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/responsive.css";

import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Databeast AI</title>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />{" "}
      </Helmet>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/crypto-detail" exact component={CryptoDetail} />
        <Route path="/marketing-detail" exact component={MarketingDetail} />
        <Route path="/try-now" exact component={TryNow} />
        <Route path="/realestate-detail" exact component={RealEstateDetail} />
        <Route path="/sports-detail" exact component={SportsDetail} />
        <Route path="/telecom-detail" exact component={TelecomDetail} />
        <Route path="/agriculture-detail" exact component={AgricultureDetail} />
        <Route path="/marketing-detail" exact component={MarketingDetail} />
        <Route path="/fitness-detail" exact component={FitnessDetail} />
        <Route
          path="/crypto-prices"
          exact
          component={CryptocrisisDetail}
        />
      </Switch>
    </div>
  );
};

export default App;
