import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MovieList from "../movieList/MovieList";
import TVList from "../movieList/TVList";

const TabCom = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Movie</Tab>
        <Tab>TV</Tab>
      </TabList>

      <TabPanel>
        <MovieList />
      </TabPanel>
      <TabPanel>
        <TVList />
      </TabPanel>
    </Tabs>
  );
};

export default Tab;
