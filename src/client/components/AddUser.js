import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REGISTER_PAGE_UNLOADED, UPDATE_FIELD_AUTH } from '../actions/types';
import { createUser } from '../actions/user';

const mapStateToProps = state => ({
  ...state.user
});

const mapDispatchToProps = dispatch => ({
  onChangeEmail: value => dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value => dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (email, password) => {
    dispatch(createUser({ email, password }));
  },
  onUnload: () => dispatch({ type: REGISTER_PAGE_UNLOADED })
});

class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.submitForm = (email, password) => (ev) => {
      ev.preventDefault();
      this.props.onSubmit(email, password);
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const email = this.props.email || '';
    const password = this.props.password || '';

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

AddUser.defaultProps = {
  inProgress: false
};

AddUser.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  inProgress: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onUnload: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
