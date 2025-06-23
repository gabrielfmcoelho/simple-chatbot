"use client";

import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function GoogleAnalyticsInit() {
  useEffect(() => {
    ReactGA.initialize(`${process.env.GA_KEY ?? ""}`);
    ReactGA.send("pageview");
  });

  return null;
}
