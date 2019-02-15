import * as React from 'react';
import { Glyphicon, MenuItem, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LocalizeContextProps, Translate, withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import logo from '../../../src/logo.svg';
import { changeTheme } from '../../actions/theme';
import { logoutUser } from '../../actions/user';
import { AppProperties } from '../../constants/application.properties';
import { IState } from '../../reducers';
import { themes } from '../../themes';
import storage from '../../utils/storage';


import './NavBar.css';

interface INavState {
  availableThemes: any[];
  openSideNav: boolean;
}

interface INavProps extends LocalizeContextProps, IStateProps, IDispatchProps {
  classes: any;
}

class NavBar extends React.Component<INavProps, INavState> {

  // Todo: Dynamic theme injection
  private static loadStyleSheet(theme: string) {
    // const styleSheets = document.querySelectorAll('link[rel=stylesheet]');
    // styleSheets.forEach((styleSheet: any) => {
    //   if (styleSheet.parentNode && styleSheet.sheet && styleSheet.sheet.href && !styleSheet.sheet.href.includes('chunk')) {
    //     styleSheet.parentNode.removeChild(styleSheet);
    //   }
    // });
    // const sheet = document.createElement('link');
    // sheet.rel = 'stylesheet';
    // sheet.href = `./static/css/${theme}/theme.min.css`;
    // sheet.type = 'text/html';
    // if (document.head) { document.head.appendChild(sheet); }
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
        name: 'logout',
        onClick: () => this.props.logoutUser()
      }
    ];
  }

  public componentWillMount = () => {
    // NavBar.loadStyleSheet(this.props.activeTheme);
  }

  public render() {
    const { activeLanguage, activeTheme, languages } = this.props;
    const { availableThemes } = this.state;
    return (
      <div className="navbar-container">
        <Navbar collapseOnSelect={true} fixedTop={true} fluid={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
              <img className="logo" src={logo} />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight={true}>
              <NavDropdown eventKey={3} title={activeLanguage ? activeLanguage.name : ''} id="basic-nav-dropdown">
                {languages.map((lang, index) => (
                  <MenuItem
                    key={index}
                    eventKey={4.1}
                    onClick={() => this.handleLangSelection(lang)}
                  >{lang.name}</MenuItem>
                ))}
              </NavDropdown>
              <NavDropdown eventKey={4} title={activeTheme} id="basic-nav-dropdown-2">
                {availableThemes.map((availableTheme: any, index) => (
                  <MenuItem key={index} eventKey={5.1} className="themeName"
                    onClick={() => this.handleThemeSelection(availableTheme.code)}>
                    <span style={{ backgroundColor: availableTheme.primaryColor }} className="themeIcon" />
                    {availableTheme.code}
                  </MenuItem>
                ))}
              </NavDropdown>
              <NavDropdown eventKey={5} title={<Glyphicon glyph="user"/>} id="basic-nav-dropdown-2">
                    {this.userMenu.map((menu: any, index) => (
                      <MenuItem key={index} eventKey={5.1} className="themeName"
                      onClick={() => menu.onClick()}>
                         <Translate id={menu.name} />
                      </MenuItem>
                    ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

  private handleLangSelection = (lang: any) => {
    delete lang.active;
    storage.setObject(AppProperties.SELECTED_LANGUAGE_KEY, lang);
    this.props.setActiveLanguage(lang.code);
  }

  private handleThemeSelection = (theme: string) => {
    NavBar.loadStyleSheet(theme);
    this.props.setActiveTheme(theme);
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
  connect<IStateProps, IDispatchProps, INavProps, IState>(
    mapStateToProps,
    mapDispatchToProps
  ),
  withLocalize
)(NavBar) as React.ComponentClass;
