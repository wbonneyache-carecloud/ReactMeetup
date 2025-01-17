import React from "react";
import { SnackBar } from "./snack-bar";
import { Content } from "./content";
import classes from "./App.module.scss";
import { SnackbarContextProvider } from "./context";

const whyDidYouRender = require("@welldone-software/why-did-you-render");
whyDidYouRender(React);

const App = _ => {
  console.log(`Rendering: App. \nTotal renders: ${++window.totalRenders}`);
  return (
    <SnackbarContextProvider>
      <SnackBar />
      <div className={classes.app}>
        <Content />
      </div>
    </SnackbarContextProvider>
  );
};

export default App;

App.whyDidYouRender = true;
