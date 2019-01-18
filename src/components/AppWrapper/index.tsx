import * as React from 'react';
import { Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { LocalizeContextProps, withLocalize } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { compose } from 'redux';
import { updateLoggedInStatus } from '../../actions/global';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/SideBar';
import { AppProperties } from '../../constants/application.properties';
import { languages } from '../../global/languages';
import { IState } from '../../reducers';
import {
  LoggedInRoutes,
  persistantRoutes as PersistantRoutes
} from '../../routes';
import storage from '../../utils/storage';
import LoaderComponent from '../Loader/index';
import './style.css';

interface IAppWrapperProps extends LocalizeContextProps {
  isUserLoggedIn: boolean;
  loadingInProgress: number;
  loading: boolean;
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
      this.setState({ isExpanded: true });
    }
  }

  public render() {
    const { isUserLoggedIn, loadingInProgress, loading } = this.props;
    const { isExpanded } = this.state;
    return (
      <Fragment>
        {isUserLoggedIn && (
          <Fragment>
            <NavBar key="nav"/>
            {loadingInProgress > 0 && <LoaderComponent loading={loading} />}
              <div className="container-fluid">
                <SideBar expandSideBar={this.expandSideBar} isExpanded={isExpanded}/>
                <div key="mainContainer" className={isExpanded ? 'main expand' : 'main'}>
                  <LoggedInRoutes key="logged-in-routes"/>
                </div>
              </div>
          </Fragment>
        ) ||
        <PersistantRoutes/>}
        <ToastContainer/>
      </Fragment>
    );
  }

  public componentDidUpdate(prevProps: any) {
    const hasActiveLanguageChanged =
      prevProps.activeLanguage && prevProps.activeLanguage !== this.props.activeLanguage;
    if (hasActiveLanguageChanged) {
      this.addTranslationsForActiveLanguage(this.props.activeLanguage);
    }
  }

  private expandSideBar = () => {
    this.setState({isExpanded: !this.state.isExpanded});
    storage.setItem(AppProperties.SIDEBAR_EXPANDED, !this.state.isExpanded);
  }

  private addTranslationsForActiveLanguage(activeLanguage: any) {
    this.props.addTranslationForLanguage(require(`../../translations/${activeLanguage.code}.welcome.json`), activeLanguage.code);
  }

}

const mapStateToProps = (state: IState): IStateProps => ({
  isUserLoggedIn: state.global.userStatus.loggedIn,
  loading: state.global.loader.loading,
  loadingInProgress: state.global.loader.loadInProgress
});

const mapDispatchToProps : IDispatchProps = ({
  updateLoggedInStatus
});

interface IStateProps {
  isUserLoggedIn: boolean;
  loadingInProgress: number;
  loading: boolean;
}

interface IDispatchProps {
  updateLoggedInStatus: (userStatus: any) => void;
}

export default compose(
  withRouter,
  withLocalize,
  connect<IStateProps, IDispatchProps, IAppWrapperProps, IState>(
    mapStateToProps,
    mapDispatchToProps
  )
)(AppWrapper) as React.ComponentType<any>;
