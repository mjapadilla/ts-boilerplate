import React, { ReactNode } from 'react';

import * as yup from 'yup';
import cn from 'classnames';
import { Formik, FormikValues } from 'formik';

interface Props<T> {
  className?: string;
  children?: ReactNode;
  initialValues: T;
  withResetForm?: boolean;
  onSubmit: (form: T) => void;
  validationSchema?: yup.Schema<unknown>;
}

function FormLayout<T extends FormikValues = object>({
  children,
  onSubmit,
  className,
  initialValues,
  withResetForm,
  validationSchema,
}: Props<T>) {
  const [validation, setValidation] = React.useState(false);

  return (
    <Formik
      enableReinitialize
      onSubmit={(payload, helpers) => {
        onSubmit(payload);
        if (withResetForm) helpers.resetForm();
      }}
      validateOnBlur={validation}
      initialValues={initialValues}
      validateOnChange={validation}
      validationSchema={validationSchema}
    >
      {(rest) => {
        const { submitForm } = rest;
        return (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
              setValidation(true);
            }}
            noValidate
            autoComplete="off"
            className={cn('w-full', className)}
          >
            {children}
          </form>
        );
      }}
    </Formik>
  );
}

FormLayout.defaultProps = {
  className: undefined,
  withResetForm: true,
  validationSchema: {},
  children: 'Children',
};

export default FormLayout;
