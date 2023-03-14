import { Button, FormInput } from 'ui/forms';
import { useFormContext } from 'ui/forms/context';

import { IRegisterForm } from '../_types';

function LoginForm() {
  const { setFieldValue, values, errors } = useFormContext<IRegisterForm>();
  return (
    <>
      <FormInput
        name="email"
        label="Email"
        onSetFieldValue={setFieldValue}
        value={values.email ?? ''}
        error={errors?.email}
      />
      <div>
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
      </div>
    </>
  );
}

export default LoginForm;
