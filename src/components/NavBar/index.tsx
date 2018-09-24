import * as React from 'react';
import { Glyphicon, MenuItem, Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { renderToStaticMarkup } from 'react-dom/server';
import { LocalizeContextProps, withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { changeTheme } from '../../actions/theme';
import { IState } from '../../reducers';
import { themes } from '../../themes';
import defaultLanguage from '../../translations/en.welcome.json';

import './NavBar.css';

interface INavState {
  availableThemes: object[],
  openSideNav: boolean,
  direction: string
}

class NavBar extends React.Component<INavProps, INavState> {
  private static loadStyleSheet(theme: string) {
    const links = document.querySelectorAll('link[rel=stylesheet]');
    links.forEach(link => {
      // @ts-ignore
      link.parentNode.removeChild(link);
    });

    const sheet = document.createElement('link');
    sheet.rel = 'stylesheet';
    sheet.href = `./static/css/${theme}.css`;
    sheet.type = 'text/css';
    document.head.appendChild(sheet);
  }

  constructor(props: INavProps) {
    super(props);
    this.state = {
      availableThemes: Object.keys(themes).map(key => {
        themes[key].code = key;
        return themes[key];
      }),
      direction: 'rtl',
      openSideNav: false
    };
    this.props.initialize({
      languages: [
        { name: 'English', code: 'en' },
        { name: 'French', code: 'fr' },
        { name: 'Spanish', code: 'es' }
      ],
      options: { renderToStaticMarkup },
      translation: defaultLanguage
    });
    this.addTranslationsForActiveLanguage();
  }

  public componentDidUpdate(prevProps: INavProps) {
    const hasActiveLanguageChanged =
      prevProps.activeLanguage !== this.props.activeLanguage;
    if (hasActiveLanguageChanged) {
      this.addTranslationsForActiveLanguage();
    }
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
              <NavItem eventKey={1} href="#">
                <NavLink
                  exact={true}
                  to="/"
                  activeClassName="active"
                  className="nav-link">
                  Home
                </NavLink>
              </NavItem>
              <NavItem eventKey={2} href="#">
                <NavLink
                  exact={true}
                  to="/hello"
                  activeClassName="active"
                  className="nav-link">
                  Hello
                </NavLink>
              </NavItem>
              <NavItem eventKey={3} href="#">
                <NavLink
                  exact={true}
                  to="/counter"
                  activeClassName="active"
                  className="nav-link">
                  Counter
                </NavLink>
              </NavItem>
              <NavDropdown eventKey={4} title={activeLanguage ? activeLanguage.name : ''} id="basic-nav-dropdown">
                {languages.map((lang, index) => (
                  <MenuItem
                    key={index}
                    eventKey={4.1}
                    onClick={() => this.handleLangSelection(lang.code)}
                  >{lang.name}</MenuItem>
                ))}
              </NavDropdown>
              <NavDropdown eventKey={5} title={activeTheme} id="basic-nav-dropdown-2">
                {availableThemes.map((availableTheme: any, index) => (
                  <MenuItem key={index} eventKey={5.1} className="themeName"
                            onClick={() => this.handleThemeSelection(availableTheme.code)}>
                    <span style={{ backgroundColor: availableTheme.primaryColor }} className="themeIcon"/>
                    {availableTheme.code}
                  </MenuItem>
                ))}
              </NavDropdown>
              <NavItem eventKey={6} href="#">
                <Glyphicon glyph="user"/>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

  private addTranslationsForActiveLanguage() {
    const { activeLanguage } = this.props;
    if (!activeLanguage) {
      return;
    }
    import(`../../translations/${activeLanguage.code}.welcome.json`).then(
        translations => {
        this.props.addTranslationForLanguage(translations, activeLanguage.code);
      }
    );
  }

  private handleLangSelection = (code: string) => {
    this.props.setActiveLanguage(code);
  }

  private handleThemeSelection = (theme: string) => {
    NavBar.loadStyleSheet(theme);
  }
}

interface INavProps extends LocalizeContextProps {
  classes: any,
  activeTheme: string,
  setActiveTheme(theme: string): void
}

interface IStateProps {
  activeTheme: string
}

interface IDispatchProps {
  setActiveTheme(theme: string): void
}

const mapStateToProps = (state: IState) => ({
  activeTheme: state.theme.activeTheme
});

const mapDispatchToProps = (dispatch: any) => ({
  setActiveTheme: (theme: string) => dispatch(changeTheme(theme))
});

export default compose(
  withRouter,
  connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps),
  withLocalize
)(NavBar);
