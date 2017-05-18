import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { withToolbar } from 'shared/components/toolbar';

class PostList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.todos.length} active todos</h3>
      </div>
    );
  }
}

export default (ducks) => {
  const { 
    getActiveTodos
  } = ducks;

  const mapStateToProps = (state) => ({
    todos: getActiveTodos(state)
  });

  return withRouter(withToolbar(connect(mapStateToProps, {
  })(PostList), { 
    title: 'Example Module: postlist' 
  }));
};
