import * as React from 'react';
import { Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { LocalizeContextProps, withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { updateLoggedInStatus } from '../../actions/global';
import NavBar from '../../components/NavBar';
import { languages } from '../../global/languages';
import { IState } from '../../reducers';
import { loggedInRoutes as LoggedInRoutes,
  persistantRoutes as PersistantRoutes } from '../../routes';
import defaultLanguage from '../../translations/en.welcome.json';

interface IAppWrapperProps extends LocalizeContextProps {
  loading: boolean;
  isUserLoggedIn: boolean;
}

interface IAppWrapperState {
  status: string;
}

class AppWrapper extends React.Component<IAppWrapperProps, IAppWrapperState> {
  constructor(props: IAppWrapperProps) {
    super(props);
    this.state = {
      status: ''
    };
    this.props.initialize({
      languages,
      options: { renderToStaticMarkup },
      translation: defaultLanguage
    });
  }

  public render() {
    const { isUserLoggedIn } = this.props;
    return (
      <Fragment>
        {
          isUserLoggedIn && (
            [
              <NavBar key="nav"/>,
              <LoggedInRoutes key="logged-in-routes"/>
            ]
          ) ||
            <PersistantRoutes/>
        }
      </Fragment>
    );
  }

  public componentDidUpdate(prevProps: any) {
    const hasActiveLanguageChanged =
      prevProps.activeLanguage &&  prevProps.activeLanguage !== this.props.activeLanguage;
    if (hasActiveLanguageChanged) {
      this.addTranslationsForActiveLanguage(this.props.activeLanguage);
    }
  }

  private addTranslationsForActiveLanguage(activeLanguage: any) {
    this.props.addTranslationForLanguage(require(`../../translations/${activeLanguage.code}.welcome.json`), activeLanguage.code);
  }

}

const mapStateToProps = (state: IState) => ({
  isUserLoggedIn: state.global.userStatus.loggedIn,
  loading: state.global.loading
});

const mapDispatchToProps = (dispatch: any) => ({
  updateLoggedInStatus: (userStatus: any) =>
    dispatch(updateLoggedInStatus(userStatus))
});

interface IStateProps {
  isUserLoggedIn: boolean;
  loading: boolean;
}

interface IDispatchProps {
  updateLoggedInStatus: (userStatus: any) => void;
}

export default compose(
  withRouter,
  withLocalize,
  connect<IStateProps, IDispatchProps>(
    mapStateToProps,
    mapDispatchToProps
  )
)(AppWrapper);
