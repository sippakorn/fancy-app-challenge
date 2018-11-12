import styled from 'styled-components';

export const FormWrapper = styled.form`
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 25px 15px 25px 10px;
  color: rgba(192, 231, 47, 1);
  border-radius: 4px;
  background: linear-gradient(45deg, rgba(2, 33, 96, 1) 0%, rgba(46, 46, 172, 1) 100%);
`;

export const FormHeader = styled.h1`
  font-size: 25px;
  padding: 0px 10px;
  margin: 0px 0px 30px 0px
  display: block;
  justify-content: center;
  text-align: center;
`;

export const FormField = styled.label`
  display: block;
  margin: 0px;
`;

export const FormFieldLabel = styled.span`
  float: left;
  width: 20%;
  text-align: right;
  padding-right: 10px;
  margin-top: 10px;
`;

export const FormFieldInput = styled.input`
  height: 30px;
  margin-bottom: 16px;
  margin-right: 6px;
  margin-top: 2px;
  outline: 0 none;
  padding: 3px 3px 3px 5px;
  border-radius: 3px;
  border: solid 1px rgba(192, 231, 47, 1);
  width: 70%;
  line-height: 15px;
  font-size: 14px;
`;

export const FormButton = styled.button`
  background: rgba(2, 33, 96, 1);
  border: none;
  padding: 10px 25px 10px 25px;
  color: rgba(192, 231, 47, 1);
  border-radius: 3px;
  border: solid 1px rgba(192, 231, 47, 1);
  cursor: pointer;
  font-size: 14px;
`;
