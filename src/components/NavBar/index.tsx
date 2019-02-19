import * as React from 'react';
import { Glyphicon, Navbar, Dropdown} from 'react-bootstrap';
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

  public render() {
    const { activeLanguage, activeTheme, languages } = this.props;
    const { availableThemes } = this.state;
    return (
      <div className="navbar-container fixed-top">
        <Navbar collapseOnSelect={true} fixedTop={true} fluid={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
              <img className="logo" src={logo} />
              </a>
            </Navbar.Brand>
          </Navbar.Header>
            <div>
              <Dropdown id="language-dropdown" className="transparent-button">
                <Dropdown.Toggle>
                  {activeLanguage ? activeLanguage.name : ''}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {languages.map(lang => (
                    <li
                      key={lang.name}
                      className="dropdown-item"
                      onClick={() => this.handleLangSelection(lang)}
                    >
                      {lang.name}
                    </li>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown id="theme-dropdown" className="transparent-button">
                <Dropdown.Toggle>
                  {activeTheme}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {availableThemes.map((availableTheme: any, index) => (
                    <li
                      className="dropdown-item themeName"
                      onClick={() => this.handleThemeSelection(availableTheme.code)}
                    >
                      <span style={{ backgroundColor: availableTheme.primaryColor }} className="themeIcon" />
                      {availableTheme.code}
                    </li>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown id="user-dropdown" className="transparent-button">
                <Dropdown.Toggle>
                  <Glyphicon glyph="user"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {this.userMenu.map((menu: any, index) => (
                    <li className="dropdown-item" onClick={() => menu.onClick()}>
                      <Translate id={menu.name} />
                    </li>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
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
