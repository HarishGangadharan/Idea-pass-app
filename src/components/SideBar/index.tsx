import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Can } from 'src/ability-context';
import { BaseIcon } from '../index';
import './SideBar.css';

interface ISideBarProps {
  isExpanded: boolean;
  expandSideBar: any;
}

class SideBar extends React.Component<ISideBarProps> {
  constructor(props: ISideBarProps) {
    super(props);
  }

  public render() {
    const { isExpanded } = this.props;
    return (
      <div key="sidebar" className={isExpanded ? 'sidebar expand' : 'sidebar'}>
        <NavLink
          exact={true}
          to="/"
          activeClassName="active"
          className="nav-link">
          <BaseIcon name="Home" label="navbar.home" />
        </NavLink>
        <NavLink
          exact={true}
          to="/formschemalist"
          activeClassName="active"
          className="nav-link">
          <BaseIcon name="Layers" label="navbar.schemas" />
        </NavLink>
        <Can I="read" a="admin">
          <NavLink
            exact={true}
            to="/rolespermissions"
            activeClassName="active"
            className="nav-link">
            <BaseIcon name="User" label="navbar.roles" />
        </NavLink>
        </Can>
        <Can I="read" a="appforms">
          <NavLink
            exact={true}
            to="/appforms/organization"
            activeClassName="active"
            className="nav-link">
            <BaseIcon name="Globe" label="navbar.organization" />
        </NavLink>
        </Can>
        <div className="indicator" onClick={this.props.expandSideBar}>
          <div className="indicator-bar">&nbsp;</div>
          <BaseIcon name={isExpanded ? 'ChevronLeft' : 'ChevronRight'} size={20} label="" />
        </div>
      </div>
    );
  }
}

export default SideBar;
