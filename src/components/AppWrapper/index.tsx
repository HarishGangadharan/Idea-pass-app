import * as React from 'react';
import { Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { LocalizeContextProps, withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { AppProperties } from 'src/constants/application.properties';
import storage from 'src/utils/storage';
import { updateLoggedInStatus } from '../../actions/global';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import { languages } from '../../global/languages';
import { IState } from '../../reducers';
import { LoggedInRoutes,
  persistantRoutes as PersistantRoutes } from '../../routes';

import './style.css';

interface IAppWrapperProps extends LocalizeContextProps {
  loading: boolean;
  isUserLoggedIn: boolean;
}

interface IAppWrapperState {
  isExpanded: boolean;
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
  public currentLanguage : any = storage.getObject(AppProperties.SELECTED_LANGUAGE_KEY);
  constructor(props: IAppWrapperProps) {
    super(props);
    this.state = {
      isExpanded: false,
      status: ''
    };
    const activeLanguage = this.currentLanguage ? this.currentLanguage : AppProperties.DEFAULT_LANGUAGE;
    // Enabling default language by getting it from localstorage
    this.props.initialize({
      languages,
      options: { renderToStaticMarkup },
      translation: require(`../../translations/${activeLanguage.code}.welcome.json`)
    });
    this.props.setActiveLanguage(activeLanguage.code);
    this.addTranslationsForActiveLanguage(activeLanguage);
  }

  public componentDidMount() {
    const isExpanded = storage.getItem(AppProperties.SIDEBAR_EXPANDED);
    if (isExpanded === 'true') {
      this.setState({isExpanded: true});
    }
  }

  public render() {
    const { isUserLoggedIn } = this.props;
    const { isExpanded } = this.state;
    return (
      <Fragment>
        {
          isUserLoggedIn && (
            <Fragment>
              <NavBar key="nav"/>
              {/* <BackdropSvgImage /> */}
              <div className="container-fluid">
                <SideBar expandSideBar={this.expandSideBar} isExpanded={isExpanded}/>
                <div key="mainContainer" className={isExpanded ? 'main expand' : 'main'}>
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

  private expandSideBar = () => {
    this.setState({isExpanded: !this.state.isExpanded});
    storage.setItem(AppProperties.SIDEBAR_EXPANDED, !this.state.isExpanded );
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
