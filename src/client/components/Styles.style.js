import styled from 'styled-components';

export const FormWrapper = styled.form`
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 25px 10px 25px 10px;
  color: rgba(192, 231, 47, 1);
  border-radius: 4px;
  background: linear-gradient(45deg, rgba(2, 33, 96, 1) 0%, rgba(46, 46, 172, 1) 100%);
`;

export const FormHeader = styled.h1`
  font-size: 25px;
  padding: 0px 10px;
  display: block;
  justify-content: center;
  text-align: center;
`;

export const FormField = styled.div`
  display: block;
  margin: 0px;
  justify-content: center;
  text-align: center;
  padding: 0px 20px 0px 20px;
`;

export const FormFieldLabel = styled.div`
  text-align: left;
  padding-right: 10px;
  font-weight: bold;
`;

export const FormFieldInput = styled.input`
  height: 30px;
  margin-bottom: 16px;
  margin-top: 2px;
  outline: 0 none;
  padding: 3px 8px 3px 8px;
  border-radius: 3px;
  border: solid 1px rgba(192, 231, 47, 1);
  width: 90%;
  line-height: 15px;
  font-size: 14px;
`;

export const FormFieldError = styled.span`
  text-align: left;
  padding-right: 10px;
  color: #e84837;
  font-style: italic;
  display: none;
`;

export const FormFooter = styled.div`
  padding: 25px 0px 0px 0px;
  border-top: solid 1px rgba(192, 231, 47, 0.6);
  justify-content: center;
  text-align: center;
`;

export const FormButton = styled.button`
  background: rgba(2, 33, 96, 1);
  padding: 10px 25px 10px 25px;
  margin: 0px 0px 10px 0px;
  color: ${props => (props.isInprgress ? 'rgba(192, 231, 47, 0.5)' : 'rgba(192, 231, 47, 1)')};
  border-radius: 12px;
  border: solid 1px rgba(192, 231, 47, 1);
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  width: 90%;
`;
