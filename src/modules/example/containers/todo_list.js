import { map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Toolbar from 'components/mdc/toolbar';
import Button from 'components/mdc/button';
import { List, ListItem } from 'components/mdc/list';
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
      <Toolbar title='Example Module: todolist'>
        <form className='mdc-textfield mdc-textfield--fullwidth' 
            onSubmit={this.addTodo}>
          <input className='mdc-textfield__input'
              value={term}
              onChange={this.changeTerm}/>
        </form>
        <List>
          {map(todos, todo => (
            <ListItem onClick={this.toggleTodo.bind(this, todo.id)}>
              <Todo {...todo}/>
            </ListItem>
          ))}
        </List>
        <Button label='all'
            onClick={this.changeFilter.bind(this, 'ALL')}/>
        <Button label='completed'
            onClick={this.changeFilter.bind(this, 'COMPLETED')}/>
        <Button label='active'
            onClick={this.changeFilter.bind(this, 'ACTIVE')}/>
      </Toolbar>
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

function mapStateToProps(state) {
  return {
    todos  : getFilteredTodos(state),
    filter : getFilter(state)
  };
}

export default withRouter(connect(mapStateToProps, { 
  addTodo, setFilter, toggleTodo 
})(TodoList));
