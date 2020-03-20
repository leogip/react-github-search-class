import React, { Component } from 'react';

class Search extends Component {
  state = {
    query: ''
  };

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="input-field">
            <input
              type="text"
              placeholder="Enter your search query"
              value={this.query}
              onKeyPress={e => this.props.onSubmit(e, this.state.query)}
              onChange={e => this.setState({ query: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
