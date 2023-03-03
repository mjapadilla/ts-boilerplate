import React from 'react';

import { useFormik } from 'formik';

import { loginSchema } from '../_validations';

const INIT_FORM = {
  email: 'admin@gmail.com',
  password: '123123123',
};

function LoginForm() {
  const [validation, setValidation] = React.useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { handleSubmit, setFieldValue, values, errors } = useFormik({
    initialValues: INIT_FORM,
    validationSchema: loginSchema,
    validateOnChange: validation,
    validateOnBlur: validation,
    onSubmit: async (form) => {
      // eslint-disable-next-line no-console
      console.log(form, ' here');
      // login(form, () => {
      //   setIfAuthenticated(true);
      // });
      // if (!search && !module_code) {
      //   navigate('/');
      // }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setValidation(true);
      }}
      noValidate
      autoComplete="off"
    >
      <div className="space-y-8">
        <h4 className="text-xl font-semibold">Login in</h4>
        <div className="space-y-5">
          {/* <FormInput
            name="email"
            label="Email"
            placeholder="Enter your email"
            autoFocus
            noautofill="true"
            value={values?.email || ''}
            onSetFieldValue={setFieldValue}
            error={errors?.email}
            required
          /> */}
          {/* <div>
            <FormInput
              label="Password"
              name="password"
              placeholder="Enter your password"
              value={values?.password || ''}
              type="password"
              autoComplete="none"
              onSetFieldValue={setFieldValue}
              withShowPassword
              error={errors?.password}
              required
            />
            <div className="mt-2 flex">
              <Button
                className="font-medium text-primary-500 text-sm ml-auto"
                label="Forgot Password?"
                to="/forgot-password"
              />
            </div>
          </div> */}
        </div>
        <div className="text-center">
          {/* <Button
            withLoader
            id="login"
            type="submit"
            label="Login"
            color="primary"
            className="w-32"
            disabled={isApiLoading}
            isLoading={isApiLoading}
          /> */}
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
