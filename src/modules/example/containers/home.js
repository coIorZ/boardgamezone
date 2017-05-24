import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { List, ListItem } from 'components/mdc/list';
import Headbar from '../components/headbar';

class Home extends Component {
  render() {
    return (
      <div>
        <Headbar title='Example'/>
        <div className='mdc-toolbar-fixed-adjust'>
          <List>
            <Link to='/example/todo-list'>
              <ListItem><div className='mdc-typography--headline'>todo list</div></ListItem>
            </Link>
            <Link to='/example/post-list'>
              <ListItem><div className='mdc-typography--headline'>post list</div></ListItem>
            </Link>
          </List>
        </div>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default withRouter(connect(mapStateToProps)(Home));
