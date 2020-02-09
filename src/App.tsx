import "./App.scss";
import "semantic-ui-css/semantic.min.css";

import React from "react";
import { Provider } from "react-redux";

import List from "./features/list/List";
import Search from "./features/search/Search";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Search />
      <List />
    </Provider>
  );
};

export default App;
