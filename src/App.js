import React, { useRef, useEffect } from "react";
import { useLocation, Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import ContactUs from "./views/ContactUs";
import AboutUs from "./views/AboutUs";
import Faq from "./components/Faq";
import Gist from "./views/Gist";
import Esports from "./views/Esports";
import FastLineFollowers from "./views/FastLineFollowers";
import Hackathon from "./views/Hackathon";
import WaterRocket from "./views/WaterRocket";
import Registration from "./views/Registration";
import AdvisoryCommittee from "./views/AdvisoryCommittee";
import Sponsor from "./views/Sponsors";

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute
            exact
            path="/contact"
            component={ContactUs}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/about"
            component={AboutUs}
            layout={LayoutDefault}
          />
          <AppRoute exact path="/faq" component={Faq} layout={LayoutDefault} />
          <AppRoute
            exact
            path="/events"
            component={Gist}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/esports"
            component={Esports}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/registration"
            component={Registration}
            layout={LayoutDefault}
          />

          <AppRoute
            exact
            path="/advisoryCommittee"
            component={AdvisoryCommittee}
            layout={LayoutDefault}
          />

          <AppRoute
            exact
            path="/fastLineFollowers"
            component={FastLineFollowers}
            layout={LayoutDefault}
          />

          <AppRoute
            exact
            path="/hackathon"
            component={Hackathon}
            layout={LayoutDefault}
          />

          <AppRoute
            exact
            path="/waterRocket"
            component={WaterRocket}
            layout={LayoutDefault}
          />

          <AppRoute
            exact
            path="/esports"
            component={Esports}
            layout={LayoutDefault}
          />

          <AppRoute
            exact
            path="/sponsors"
            component={Sponsor}
            layout={LayoutDefault}
          />
        </Switch>
      )}
    />
  );
};

export default App;
