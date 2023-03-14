import React from 'react';

import FormLayout, { Button } from 'ui/forms';
import { ROOT_SESSION } from 'context/session';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';

import { useLogin } from '../_hooks';
import { IRegisterForm } from '../_types';
import LoginForm from '../forms/LoginForm';
import { loginSchema } from '../_validations';

const INIT_FORM: IRegisterForm = {
  email: 'admin@gmail.com',
  password: '123123123',
};

function Login() {
  const navigate = useNavigate();
  const [isApiLoading, login] = useLogin();
  const { setIfAuthenticated } = React.useContext(ROOT_SESSION);

  const { search = null } = useLocation();
  const { params } = useMatch(`/:module_code`) || {};

  const { module_code = null } = params || {};

  const handleOnSubmit = (value: IRegisterForm) => {
    login(value, () => {
      setIfAuthenticated(true);
    });
    if (!search && !module_code) {
      navigate('/');
    }
  };

  return (
    <FormLayout
      initialValues={INIT_FORM}
      onSubmit={handleOnSubmit}
      validationSchema={loginSchema}
    >
      <div className="space-y-8">
        <h4 className="text-xl font-semibold">Login in</h4>
        <div className="space-y-5">
          <LoginForm />
        </div>
        <div className="text-center">
          <Button
            withLoader
            id="login"
            type="submit"
            label="Login"
            color="primary"
            className="w-32"
            disabled={isApiLoading}
            isLoading={isApiLoading}
          />
        </div>
      </div>
    </FormLayout>
  );
}

export default Login;
