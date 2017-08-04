import { map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editKeyword } from '../ducks/actions';
import { getKeywordTodos } from '../ducks/selectors';
import TodoItem from '../components/todo_item';

export class PostList extends Component {
  state = {
    term: '',
  }

  render() {
    const { term } = this.state;
    const { todos } = this.props;

    return (
      <div>
        <h3>this is post list page</h3>
        <input value={term}
          onInput={this.editKeyword}/>
        <ul>
          {map(todos, todo => (
            <TodoItem key={todo.id} title={todo.title} checked={todo.done}/>
          ))}
        </ul>
      </div>
    );
  }

  editKeyword = e => {
    this.setState({
      term: e.target.value,
    });
    this.props.editKeyword(e.target.value);
  }
}

export default connect(
  state => ({
    todos: getKeywordTodos(state),
  }),
  { editKeyword },
)(PostList);
