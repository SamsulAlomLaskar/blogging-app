import { Grid } from "@mui/material";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import TabsPanel from "./components/navbar/Tabs";
import RouterComponent from "./routes";

const Main = () => {
  return (
    <>
      <Grid>
        <Navbar />
      </Grid>
      <Grid>
        <TabsPanel>
          <Grid>
            <RouterComponent />
          </Grid>
        </TabsPanel>
      </Grid>
    </>
  );
};

export default Main;
