import * as React from 'react';
import { Globe, Home, Layers, User } from 'react-feather';
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
          <Home size="15" className="cursor-pointer" />&nbsp;
          Home
        </NavLink>
        <NavLink
          exact={true}
          to="/formschemalist"
          activeClassName="active"
          className="nav-link">
          <Layers size="15" className="cursor-pointer" />&nbsp;
          Schemas
        </NavLink>
        <Can I="read" a="admin">
          <NavLink
            exact={true}
            to="/admin"
            activeClassName="active"
            className="nav-link">
            <User size="15" className="cursor-pointer"/>&nbsp;
            Admin
        </NavLink>
        </Can>
        <Can I="read" a="appforms">
          <NavLink
            exact={true}
            to="/appforms/organization"
            activeClassName="active"
            className="nav-link">
            <Globe size="15" className="cursor-pointer"/>&nbsp;
            Organization
        </NavLink>
        </Can>
      </div>
    );
  }
}

export default SideBar;
