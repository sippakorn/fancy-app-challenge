import React from 'react';
import { connect } from 'react-redux';
import { REGISTER_PAGE_UNLOADED } from '../actions/types';
import { createUser } from '../actions/user';

const mapStateToProps = state => ({
  ...state.auth
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (email, password) => {
    dispatch(createUser({ email, password }));
  },
  onUnload: () => dispatch({ type: REGISTER_PAGE_UNLOADED })
});

class AddUser extends React.Component {
  constructor() {
    super();
    this.submitForm = (username, email, password) => (ev) => {
      ev.preventDefault();
      this.props.onSubmit(username, email, password);
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const email = this.props.email;
    const password = this.props.password;

    return (
      <div className="auth-page">
        <form onSubmit={this.submitForm(email, password)}>
          <fieldset>
            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="email"
                placeholder="Email"
                value={this.props.email}
                onChange={this.changeEmail}
              />
            </fieldset>

            <fieldset className="form-group">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Password"
                value={this.props.password}
                onChange={this.changePassword}
              />
            </fieldset>

            <button
              className="btn btn-lg btn-primary pull-xs-right"
              type="submit"
              disabled={this.props.inProgress}
            >
              Sign up
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
