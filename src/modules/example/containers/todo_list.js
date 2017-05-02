import { map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Todo from '../components/todo';
import { 
  getFilteredTodos, getFilter,
  addTodo, setFilter
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
        <form onSubmit={this.addTodo}>
          <input 
            value={term}
            onChange={this.onChangeTerm}
          />
        </form>
        <ul>
          {map(todos, todo => <Todo key={todo.id} {...todo}/>)}
        </ul>
        <button onClick={this.changeFilter.bind(this, 'ALL')}>all</button>
        <button onClick={this.changeFilter.bind(this, 'COMPLETED')}>completed</button>
        <button onClick={this.changeFilter.bind(this, 'ACTIVE')}>active</button>
      </div>
    );
  }

  onChangeTerm = (e) => {
    this.setState({ term: e.target.value });
  }

  addTodo = (e) => {
    e.preventDefault();
    if(this.state.term.trim() !== '') {
      this.props.addTodo(this.state.term);
    }
    this.setState({ term: '' });
  }

  changeFilter = (filterStr) => {
    this.props.setFilter(filterStr);
  }
}

function mapStateToProps(state) {
  return {
    todos  : getFilteredTodos(state),
    filter : getFilter(state)
  };
}

export default withRouter(connect(mapStateToProps, { addTodo, setFilter })(TodoList));
