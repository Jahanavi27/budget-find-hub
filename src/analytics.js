import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-TQXP7Y909E";

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const trackPageView = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};