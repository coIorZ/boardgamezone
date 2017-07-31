import { map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo, setFilter, setFilterAsync, toggleTodo } from '../ducks/actions';
import { getFilteredTodos, getFilter } from '../ducks/selectors';

class TodoList extends Component {
  state = {
    term: ''
  }

  render() {
    const { term } = this.state;
    const { todos } = this.props;

    return (
      <div>
        <h3>this is todo list page</h3>
        <form onSubmit={this.addTodo}>
          <input value={term}
              onChange={this.changeTerm}/>
          <button type='submit'>add</button>
        </form>

        <ul>
          {map(todos, todo => (
            <li key={todo.id}
                onClick={this.toggleTodo.bind(this, todo.id)}>
              <input type='checkbox' checked={todo.done}/>
              <label>{todo.title}</label>
            </li>
          ))}
        </ul>

        <button onClick={this.changeFilter.bind(this, 'ALL')}>all</button>
        <button onClick={this.changeFilter.bind(this, 'COMPLETED')}>completed</button>
        <button onClick={this.changeFilter.bind(this, 'ACTIVE')}>active</button>
      </div>
    );
  }

  changeTerm = e => {
    this.setState({ term: e.target.value });
  }

  addTodo = e => {
    e.preventDefault();
    if(this.state.term.trim() !== '') {
      this.props.addTodo(this.state.term);
    }
    this.setState({ term: '' });
  }

  toggleTodo = id => {
    this.props.toggleTodo(id);
  }

  changeFilter = filterStr => {
    this.props.setFilterAsync(filterStr);
  }
}

export default connect(
  state => ({
    todos  : getFilteredTodos(state),
    filter : getFilter(state)
  }),
  { addTodo, setFilter, toggleTodo, setFilterAsync }
)(TodoList);
