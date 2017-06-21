import { map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from '../components/todo';
import { 
  getFilteredTodos, getFilter,
  addTodo, setFilter, toggleTodo
} from '../ducks';

class TodoList extends Component {
  state = {
    term: ''
  }

  render() {
    const {
      term = ''
    } = this.state;

    const {
      todos = {}
    } = this.props;

    return (
      <div>
        <p>this is todo list page</p>
        <form onSubmit={this.addTodo}>
          <input value={term}
              onChange={this.changeTerm}/>
        </form>
        {map(todos, todo => (
          <Todo {...todo} 
              onClick={this.toggleTodo.bind(this, todo.id)}/>
        ))}
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
    this.props.setFilter(filterStr);
  }
}

function mapStateToProps(state) {
  return {
    todos  : getFilteredTodos(state),
    filter : getFilter(state)
  };
}

export default connect(mapStateToProps, { 
  addTodo, setFilter, toggleTodo 
})(TodoList);
