import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { Can } from 'src/ability-context';
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
        <Can I="read" a="admin">
          <NavLink
            exact={true}
            to="/admin"
            activeClassName="active"
            className="nav-link">
            Admin
        </NavLink>
        </Can>
        <Can I="read" a="organization">
          <NavLink
            exact={true}
            to="/appforms/organization"
            activeClassName="active"
            className="nav-link">
            Organization
        </NavLink>
        </Can>
      </div>
    );
  }
}

export default SideBar;
