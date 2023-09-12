import { FC, ReactNode } from 'react';

type FormType = {
  children?: ReactNode;
};

type FormPostType = {
  code: string;
  firstName: string;
  lastName: string;
  contactNumber: string;
  emailAddress: string;
  streetAddress: string;
  suburb: string;
  postcode: string;
  state: string;
  acceptTermsAndConditions: boolean;
  acceptPersonalInformationShare: boolean;
  subscribeToMarketing: boolean;
};

type FormCodeType = {
  code: string;
};

// eslint-disable-next-line no-unused-vars,react/function-component-definition
const Form: FC<FormType> = () => <div className="" />;

Form.defaultProps = {
  children: undefined,
};

export default Form;
