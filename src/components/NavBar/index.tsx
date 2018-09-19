import * as React from 'react';
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

import ThemeContext from '../../ThemeContext';

import '../../assets/styles/NavBar.css';

interface INavState {
  availableThemes: object[],
  openSideNav: boolean,
  direction: string
}

class NavBar extends React.Component<INavProps, INavState>{
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
        <ThemeContext.Consumer>
            {theme => (
                <nav className="navbar navbar-expand-lg navbar-container" data-theme={theme}>
                    <div className="navbar-brand"> App Name </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink
                                    exact={true}
                                    to="/"
                                    activeClassName="active"
                                    className="nav-link">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact={true}
                                    to="/hello"
                                    activeClassName="active"
                                    className="nav-link">
                                    Hello
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact={true}
                                    to="/counter"
                                    activeClassName="active"
                                    className="nav-link">
                                    Counter
                                </NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" role="button" className="nav-link dropdown-toggle" id="navbarDropdown"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {activeLanguage ? activeLanguage.name : ''}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {languages.map((lang, index) => (
                                        <a key={index} className="dropdown-item" href="#"
                                           onClick={() => this.handleLangSelection(lang.code)}>{lang.name}</a>
                                    ))}
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" role="button" className="nav-link dropdown-toggle themeName" id="themeDropdown"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {activeTheme}
                                </a>
                                <div className="dropdown-menu" aria-labelledby="themeDropdown">
                                    {availableThemes.map((availableTheme: any, index) => (
                                        <a key={index} className="dropdown-item themeName"
                                           onClick={() => this.handleThemeSelection(availableTheme.code)}>
                                            <span style={{ backgroundColor: availableTheme.primaryColor }} className="themeIcon"/>
                                            {availableTheme.code}
                                        </a>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            )}
        </ThemeContext.Consumer>
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
    this.props.setActiveTheme(theme);
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
