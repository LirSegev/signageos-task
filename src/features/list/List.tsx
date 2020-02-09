import React from "react";
import { connect } from "react-redux";
import { Table } from "semantic-ui-react";
import { generate } from "shortid";

import { RootState } from "../../store";
import { fetchHeroes } from "../../utils/api";

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

  componentDidUpdate(prevProps: ListProps) {
    if (this.props.searchQuery !== prevProps.searchQuery)
      this._updateResults(this.props.searchQuery);
  }

  _updateResults = async (searchQuery = "") => {
    const MAX_ATTEMPTS = 3;

    let results: string[] | undefined = undefined;
    for (
      let attemptNum = 1;
      attemptNum <= MAX_ATTEMPTS && !results;
      attemptNum++
    ) {
      try {
        results = await fetchHeroes(searchQuery);
      } catch (err) {
        console.error(err);
      }
    }

    if (results)
      this.setState({
        results
      });
  };

  render() {
    const TableRows = this.state.results.map(result => (
      <Table.Row key={`listItem-${generate()}`}>
        <Table.Cell>{result}</Table.Cell>
      </Table.Row>
    ));

    return (
      <Table>
        <Table.Body>{TableRows}</Table.Body>
      </Table>
    );
  }
}

const mapState = (state: RootState) => ({
  searchQuery: state.list.searchQuery
});
export default connect(mapState)(List);
