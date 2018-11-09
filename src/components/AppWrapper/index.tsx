import * as React from 'react';
import { Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { LocalizeContextProps, withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { updateLoggedInStatus } from '../../actions/global';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import { languages } from '../../global/languages';
import { IState } from '../../reducers';
import { LoggedInRoutes,
  persistantRoutes as PersistantRoutes } from '../../routes';
import defaultLanguage from '../../translations/en.welcome.json';

import './style.css';

interface IAppWrapperProps extends LocalizeContextProps {
  loading: boolean;
  isUserLoggedIn: boolean;
}

interface IAppWrapperState {
  status: string;
}

// function BackdropSvgImage() {
//   return <svg className="backdrop" version="1.0" xmlns="http://www.w3.org/2000/svg"
//   width="1429.000000pt" height="175.000000pt" viewBox="0 0 1429.000000 175.000000"
//   preserveAspectRatio="xMidYMid meet">
//     <g transform="translate(0.000000,175.000000) scale(0.100000,-0.100000)"
//     fill="#000000" stroke="none">
//     <path d="M2 1268 l3 -482 315 -38 c705 -84 2408 -261 3050 -318 3317 -291
//     6010 -430 8355 -430 808 0 2099 39 2498 76 l67 6 0 834 0 834 -7145 0 -7145 0
//     2 -482z"/>
//     </g>
//   </svg>;
// }

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
            <Fragment>
              <NavBar key="nav"/>
              {/* <BackdropSvgImage /> */}
              <div className="container-fluid">
                <SideBar/>
                <div key="mainContainer" className="main">
                  <LoggedInRoutes key="logged-in-routes"/>
                </div>
              </div>
             </Fragment>
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
