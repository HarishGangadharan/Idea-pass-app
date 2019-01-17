import * as React from 'react';
import { Translate } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import Image from '../../../src/logo.png';
import { loginUser } from '../../actions/user';
import { IState } from '../../reducers';
import { isEmailValid } from '../../utils/commonUtil';
import './login.css';


interface ILoginProps extends IDispatchProps, IMapStateProps {
  classes: any;
}

interface ILoginState {
  email: string,
  emailValid: boolean,
  password: string,
  pristine: boolean
}

class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      email: '',
      emailValid: false,
      password: '',
      pristine: true
    };
  }

  public render() {
    const { loading } = this.props;
    const { emailValid, email, password, pristine } = this.state;
    return (
      <div className="container-fluid login-container">
      <div className="shadow-container">
      <div className="head">
        <img src={Image} />
      </div>
        <div className="content">
          <div className="card center-block card-signin">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin">
                <label htmlFor="inputEmail"><Translate id="label.emailAddress" /></label>
                <div className="form-label-group">
                  <input
                    id="email"
                    onChange={event => {
                      this.setState({
                        email: event.target.value,
                        emailValid: isEmailValid(event.target.value),
                        pristine: false
                      });
                    }}
                    value={email}
                    name="email"
                    autoComplete="email"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    required={true}
                  />
                  {
                    !pristine && !emailValid  &&
                    <span className="error-text"><Translate id="validations.email" /></span>
                  }
                </div>
                <label className="mt-3" htmlFor="inputPassword"><Translate id="label.password" /></label>
                <div className="form-label-group">
                  <input
                    value={password}
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={event =>
                      this.setState({
                        password:  event.target.value,
                        pristine: false
                      })
                    }
                    className="form-control"
                    placeholder="Password"
                    required={true}
                  />
                   {
                     !pristine && !password  &&
                    <span className="error-text"><Translate id="validations.password" /></span>
                   }
                </div>
                <button
                  className="mt-20 btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                  disabled={(!emailValid && !password) || loading}
                  onClick={this.onLoginClick}
                >
                  <Translate id="login" />
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }

  private onLoginClick = (event: any) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser(email, password);
  }
}

interface IDispatchProps {
  loginUser: (email: string , password: string) => void;
}

interface IMapStateProps {
  loading: boolean;
}

const mapStateTopProps = (state: IState) => ({
  loading: state.user.loading
});

const mapDispatchToProps = (dispatch: any) => ({
  loginUser: (email: string , password: string) => dispatch(loginUser(email, password))
});

export default compose(
  withRouter,
  connect<IMapStateProps, IDispatchProps, ILoginProps, IState>(
    mapStateTopProps,
    mapDispatchToProps
  )
)(Login) as React.ComponentType<any>;
