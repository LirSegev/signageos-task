import React from "react";
import { connect } from "react-redux";
import { Input } from "semantic-ui-react";

import { updateSearchQuery } from "./Search.slice";

declare type ConnectedAction<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => void;

interface SearchProps {
  updateSearchQuery: ConnectedAction<typeof updateSearchQuery>;
}

class Search extends React.Component<SearchProps> {
  render() {
    return (
      <Input
        placeholder="Search..."
        onChange={(e, { value }) => this.props.updateSearchQuery(value)}
      />
    );
  }
}

const mapDispatch = {
  updateSearchQuery
};
export default connect(null, mapDispatch)(Search);
