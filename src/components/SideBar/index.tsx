import * as React from 'react';
import { NavLink } from 'react-router-dom';

import './SideBar.css';

class SideBar extends React.Component {

  public render() {
    return (
      <div key="sidebar" className="sidebar">
        <NavLink
          exact={true}
          to="/"
          activeClassName="active"
          className="nav-link">
          Home
        </NavLink>
          <NavLink
          exact={true}
          to="/formschemalist"
          activeClassName="active"
          className="nav-link">
          Schemas
        </NavLink>
      </div>
    );
  }
}

export default SideBar;
