import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { fetchHeroes } from "../../utils/api";
import { generate } from "shortid";

export interface ListState {
  results: string[];
}
export interface ListProps {
  searchQuery: string;
}

class List extends React.Component<ListProps, ListState> {
  state: ListState = {
    results: []
  };

  componentDidMount() {
    this._updateResults();
  }

  componentDidUpdate() {
    this._updateResults(this.props.searchQuery);
  }

  _updateResults = (searchQuery = "") => {
    fetchHeroes(searchQuery)
      .then(results => {
        this.setState({
          results
        });
      })
      .catch(err => console.error(err));
  };

  render() {
    const listItems = this.state.results.map(result => (
      <li key={`listItem-${generate()}`}>{result}</li>
    ));

    return <ul>{listItems}</ul>;
  }
}

const mapState = (state: RootState) => ({
  searchQuery: state.list.searchQuery
});
export default connect(mapState)(List);
