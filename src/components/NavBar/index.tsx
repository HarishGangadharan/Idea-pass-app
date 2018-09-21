import * as React from 'react';
import { Glyphicon, MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LocalizeContextProps, withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { changeTheme } from '../../actions/theme';
import { logoutUser } from '../../actions/user';
import { IState } from '../../reducers';
import { themes } from '../../themes';

import './NavBar.css';

interface INavState {
  availableThemes: any[];
  openSideNav: boolean;
}

interface INavProps extends LocalizeContextProps, IStateProps, IDispatchProps {
  classes: any;
}

class NavBar extends React.Component<INavProps, INavState> {
  private static loadStyleSheet(theme: string) {
    const links = document.querySelectorAll('link[rel=stylesheet]');
    links.forEach(link => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
    });

    const sheet = document.createElement('link');
    sheet.rel = 'stylesheet';
    sheet.href = `./static/css/${theme}.css`;
    sheet.type = 'text/css';
    document.head.appendChild(sheet);
  }
  private userMenu: any[];

  constructor(props: INavProps) {
    super(props);
    this.state = {
      availableThemes: Object.keys(themes).map(key => {
        themes[key].code = key;
        return themes[key];
      }),
      openSideNav: false
    };
    this.userMenu = [
      {
        name: 'Logout',
        onClick: () => this.props.logoutUser()
      }
    ];
  }

  public render() {
    const { activeLanguage, activeTheme, languages } = this.props;
    const { availableThemes } = this.state;
    return (
      <div className="navbar-container">
        <Navbar collapseOnSelect={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">App Name</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight={true}>
              <NavItem eventKey={1} componentClass="span">
                <NavLink
                  exact={true}
                  to="/"
                  activeClassName="active"
                  className="nav-link">
                  Home
                </NavLink>
              </NavItem>
              <NavItem eventKey={2} componentClass="span">
                <NavLink
                  exact={true}
                  to="/hello"
                  activeClassName="active"
                  className="nav-link">
                  Hello
                </NavLink>
              </NavItem>
              <NavItem eventKey={3} componentClass="span">
                <NavLink
                  exact={true}
                  to="/counter"
                  activeClassName="active"
                  className="nav-link">
                  Counter
                </NavLink>
              </NavItem>
              <NavItem eventKey={4} componentClass="span">
                <NavLink
                  exact={true}
                  to="/formBuilder"
                  activeClassName="active"
                  className="nav-link">
                  Form
                </NavLink>
              </NavItem>
              <NavDropdown eventKey={5} title={activeLanguage ? activeLanguage.name : ''} id="basic-nav-dropdown">
                {languages.map((lang, index) => (
                  <MenuItem
                    key={index}
                    eventKey={4.1}
                    onClick={() => this.handleLangSelection(lang.code)}
                  >{lang.name}</MenuItem>
                ))}
              </NavDropdown>
              <NavDropdown eventKey={6} title={activeTheme} id="basic-nav-dropdown-2">
                {availableThemes.map((availableTheme: any, index) => (
                  <MenuItem key={index} eventKey={5.1} className="themeName"
                    onClick={() => this.handleThemeSelection(availableTheme.code)}>
                    <span style={{ backgroundColor: availableTheme.primaryColor }} className="themeIcon" />
                    {availableTheme.code}
                  </MenuItem>
                ))}
              </NavDropdown>
              <NavDropdown eventKey={7} title={<Glyphicon glyph="user"/>} id="basic-nav-dropdown-2">
                    {this.userMenu.map((menu: any, index) => (
                      <MenuItem key={index} eventKey={5.1} className="themeName"
                      onClick={() => menu.onClick()}>
                         {menu.name}
                      </MenuItem>
                    ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

  private handleLangSelection = (code: string) => {
    this.props.setActiveLanguage(code);
  }

  private handleThemeSelection = (theme: string) => {
    NavBar.loadStyleSheet(theme);
  }
}

interface IStateProps {
  activeTheme: string;
}

interface IDispatchProps {
  logoutUser(): void;
  setActiveTheme(theme: string): void;
}

const mapStateToProps = (state: IState) => ({
  activeTheme: state.theme.activeTheme
});

const mapDispatchToProps = (dispatch: any) => ({
  logoutUser: () => dispatch(logoutUser()),
  setActiveTheme: (theme: string) => dispatch(changeTheme(theme))
});

export default compose(
  withRouter,
  connect<IStateProps, IDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLocalize
)(NavBar);
