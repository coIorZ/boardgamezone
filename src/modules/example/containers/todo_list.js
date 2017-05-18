import map from 'lodash/map';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withToolbar } from 'shared/components/toolbar';
import Todo from '../components/todo';

class TodoList extends Component {
  state = {
    term: ''
  }

  render() {
    const {
      term = ''
    } = this.state;

    const {
      todos = {},
      history
    } = this.props;

    return (
      <div>
        <form className='mdc-textfield mdc-textfield--fullwidth' 
            onSubmit={this.addTodo}>
          <input className='mdc-textfield__input'
              value={term}
              onChange={this.changeTerm}/>
        </form>
        <ul className='mdc-list'>
          {map(todos, todo => (
            <Todo {...todo}
                key={todo.id}  
                onToggle={this.toggleTodo.bind(null, todo.id)}/>
          ))}
        </ul>
        <button className='mdc-button' 
            onClick={this.changeFilter.bind(this, 'ALL')}>all</button>
        <button className='mdc-button' 
            onClick={this.changeFilter.bind(this, 'COMPLETED')}>completed</button>
        <button className='mdc-button' 
            onClick={this.changeFilter.bind(this, 'ACTIVE')}>active</button>
        <div onClick={history.goBack}>Back</div>
      </div>
    );
  }

  changeTerm = (e) => {
    this.setState({ term: e.target.value });
  }

  addTodo = (e) => {
    e.preventDefault();
    if(this.state.term.trim() !== '') {
      this.props.addTodo(this.state.term);
    }
    this.setState({ term: '' });
  }

  toggleTodo = (id) => {
    this.props.toggleTodo(id);
  }

  changeFilter = (filterStr) => {
    this.props.setFilter(filterStr);
  }
}

export default (ducks) => {
  const { 
    getFilteredTodos, getFilter,
    addTodo, setFilter, toggleTodo
  } = ducks;

  const mapStateToProps = (state) => ({
    todos  : getFilteredTodos(state),
    filter : getFilter(state)
  });

  return withRouter(withToolbar(connect(mapStateToProps, { 
    addTodo, setFilter, toggleTodo 
  })(TodoList), { 
    title: 'Example Module: todolist' 
  }));
};
