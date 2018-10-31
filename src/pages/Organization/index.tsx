import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { loginUser } from '../../actions/user';
import { IState } from '../../reducers';
import { isEmailValid } from '../../utils/commonUtil';
import './organization.css';


interface IOrganizationProps extends IDispatchProps, IMapStateProps {
  classes: any;
}

interface IOrganizationState {
  applicationName: string;
  email: string;
  emailValid: boolean;
  name: string;
  isActive: boolean;
  submitted: boolean;
}

class Organization extends React.Component<IOrganizationProps, IOrganizationState> {
  constructor(props: IOrganizationProps) {
    super(props);
    this.state = {
      applicationName: '',
      email: '',
      emailValid: false,
      isActive: true,
      name: '',
      submitted: false
    };
  }

  public render() {
    const { loading } = this.props;
    const { applicationName, emailValid, email, name, submitted } = this.state;
    return (
      <div className="organization-container">
        <div className="content">
          <div className="card card-signin">
            <div className="card-body">
              <h5 className="card-title text-center">Create Organization</h5>
              <form className="form-signin">
                <label className="mt-10" htmlFor="inputName">Organization Name</label>
                <div className="form-label-group">
                  <input
                    value={name}
                    name="name"
                    type="text"
                    id="name"
                    autoComplete="off"
                    onChange={event =>
                      this.setState({
                        name: event.target.value
                      })
                    }
                    className="form-control"
                    placeholder="Organization Name"
                    required={true}
                  />
                  {
                    submitted && !name &&
                    <span className="error-text">Enter organization name</span>
                  }
                </div>
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
                    submitted || !emailValid && email &&
                    <span className="error-text">Enter valid email</span>
                  }
                </div>
                <label className="mt-10" htmlFor="inputApplicationName">Application Name</label>
                <div className="form-label-group">
                  <input
                    value={applicationName}
                    name="applicationName"
                    type="text"
                    id="applicationName"
                    autoComplete="off"
                    onChange={event =>
                      this.setState({
                        applicationName: event.target.value
                      })
                    }
                    className="form-control"
                    placeholder="Application Name"
                    required={true}
                  />
                  {
                    submitted && !applicationName &&
                    <span className="error-text">Enter application name</span>
                  }
                </div>
                <button
                  className="mt-20 btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                  disabled={(!emailValid && !applicationName && !name) || loading}
                  onClick={event => {
                    this.onOrganizationClick(event);
                    this.setState({
                      submitted: true
                    });
                  }
                  }>
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private onOrganizationClick = (event: any) => {
    event.preventDefault();
    const { email, name } = this.state;
    this.props.loginUser(email, name);
  }
}

interface IDispatchProps {
  loginUser: (email: string, password: string) => void;
}

interface IMapStateProps {
  loading: boolean;
}

const mapStateTopProps = (state: IState) => ({
  loading: state.user.loading
});

const mapDispatchToProps = (dispatch: any) => ({
  loginUser: (email: string, password: string) => dispatch(loginUser(email, password))
});

export default compose(
  withRouter,
  connect<IMapStateProps, IDispatchProps>(
    mapStateTopProps,
    mapDispatchToProps
  )
)(Organization);
