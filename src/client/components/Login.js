import React from 'react';
import PropsType from 'prop-types';
import {
  FormWrapper,
  FormHeader,
  FormField,
  FormFieldLabel,
  FormFieldInput,
  FormButton,
  FormFooter,
  FormFieldError
} from './Styles.style';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
  }

  render() {
    return (
      <FormWrapper>
        <FormHeader>Fancy App</FormHeader>
        <FormField>
          <FormFieldLabel>Email</FormFieldLabel>
          <FormFieldInput type="email" placeholder="user@example.com" />
          <FormFieldError>Email is invalid</FormFieldError>
        </FormField>
        <FormField>
          <FormFieldLabel>Password</FormFieldLabel>
          <FormFieldInput type="password" placeholder="Password" />
        </FormField>
        <FormFooter>
          <FormButton>Login</FormButton>
          <FormButton>Create a new account</FormButton>
        </FormFooter>
      </FormWrapper>
    );
  }
}

Login.propsType = {
  email: PropsType.string.isRequired,
  password: PropsType.string.isRequired
};

export default Login;
