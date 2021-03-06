import React from "react";
import classes from "./app.module.scss";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import Work from "../work/work";
import Experience from "../experience/experience";
import Skills from "../skills/skills";

const App = () => {
  return (
    <div className={classes.app}>
      <Navbar />
      <Hero />
      <div className={classes.column}>
        <Work />
        <Experience />
        <Skills />
      </div>
    </div>
  );
};

export default App;
