import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { REGISTER_PAGE_UNLOADED, UPDATE_FIELD_AUTH } from '../actions/types';
import { createUser } from '../actions/user';
import {
  FormWrapper,
  FormHeader,
  FormField,
  FormFieldLabel,
  FormFieldInput,
  FormButton
} from './Styles.style';

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
      <FormWrapper onSubmit={this.submitForm(email, password)}>
        <FormHeader>Fancy App</FormHeader>
        <FormField>
          <FormFieldLabel>Email</FormFieldLabel>
          <FormFieldInput
            type="email"
            placeholder="user@example.com"
            value={this.props.email}
            onChange={this.changeEmail}
          />
        </FormField>
        <FormField>
          <FormFieldLabel>Password</FormFieldLabel>
          <FormFieldInput
            type="password"
            placeholder="Password"
            value={this.props.password}
            onChange={this.changePassword}
          />
        </FormField>
        <FormField>
          <FormFieldLabel />
          <FormButton type="submit" disabled={this.props.inProgress}>
            Register
          </FormButton>
        </FormField>
      </FormWrapper>
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
