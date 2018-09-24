import * as React from 'react';
import { Translate } from 'react-localize-redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { loginUser } from '../../actions/user';
import { IState } from '../../reducers';
import { isEmailValid } from '../../utils/commonUtil';
import './styles.css';


interface ILoginProps extends IDispatchProps, IMapStateProps {
  classes: any;
}

interface ILoginState {
  email: string,
  emailValid: boolean,
  password: string
}

interface IUserKeys {
  email: string,
  password: string
}

class Login extends React.Component<ILoginProps, ILoginState> {
  public inputKeys: IUserKeys;
  constructor(props: ILoginProps) {
    super(props);
    this.state = {
      email: '',
      emailValid: false,
      password: ''
    };
  }

  public render() {
    const { loading } = this.props;
    const { emailValid, email, password } = this.state;
    return (
      <div className="container login-container">
        <div className="col-sm-9 col-md-7 col-lg-5 content">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form className="form-signin">
                <label htmlFor="inputEmail">Email address</label>
                <div className="form-label-group">
                  <input
                    id="email"
                    onChange={event => {
                      this.setState({
                        email: event.target.value,
                        emailValid: isEmailValid(event.target.value)
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
                    !emailValid  &&
                    <span className="error-text">Enter valid email</span>
                  }
                </div>
                <label className="mt-10" htmlFor="inputPassword">Password</label>
                <div className="form-label-group">
                  <input
                    value={password}
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={event =>
                      this.setState({
                        password:  event.target.value
                      })
                    }
                    className="form-control"
                    placeholder="Password"
                    required={true}
                  />
                   {
                    !password  &&
                    <span className="error-text">Enter password</span>
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
    );
  }

  private onLoginClick = (event: any) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser({email, password});
  }
}

interface IDispatchProps {
  loginUser: (user: IUserKeys) => void;
}

interface IMapStateProps {
  loading: boolean;
}

const mapStateTopProps = (state: IState) => ({
  loading: state.user.loading
});

const mapDispatchToProps = (dispatch: any) => ({
  loginUser: (user: IUserKeys) => dispatch(loginUser(user))
});

export default compose(
  withRouter,
  connect<IMapStateProps, IDispatchProps>(
    mapStateTopProps,
    mapDispatchToProps
  )
)(Login);
