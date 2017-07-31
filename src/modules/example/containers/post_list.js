import { map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setKeywordDebounced } from '../ducks/actions';
import { getKeywordTodos } from '../ducks/selectors';

class PostList extends Component {
  state = {
    term: ''
  }

  render() {
    const { term } = this.state;
    const { todos } = this.props;

    return (
      <div>
        <h3>this is post list page</h3>
        <input value={term}
            onInput={this.setKeyword}/>
        <ul>
          {map(todos, todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }

  setKeyword = e => {
    this.setState({
      term: e.target.value
    });
    this.props.setKeywordDebounced(e.target.value);
  }
}

export default connect(
  state => ({
    todos: getKeywordTodos(state)
  }),
  { setKeywordDebounced }
)(PostList);
