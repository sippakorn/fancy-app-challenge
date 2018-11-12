import React from 'react';
import PropsType from 'prop-types';
import {
  FormWrapper,
  FormHeader,
  FormField,
  FormFieldLabel,
  FormFieldInput,
  FormButton
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
          <FormFieldInput />
        </FormField>
        <FormField>
          <FormFieldLabel>Password</FormFieldLabel>
          <FormFieldInput />
        </FormField>
        <FormField>
          <FormFieldLabel />
          <FormButton>Login</FormButton>
        </FormField>
      </FormWrapper>
    );
  }
}

Login.propsType = {
  email: PropsType.string.isRequired,
  password: PropsType.string.isRequired
};

export default Login;
