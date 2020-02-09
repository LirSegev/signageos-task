import React from "react";

export interface ListState {
  results: string[];
}

class List extends React.Component<{}, ListState> {
  state: ListState = {
    results: []
  };
  render() {
    return <div>{this.state.results}</div>;
  }
}

export default List;
