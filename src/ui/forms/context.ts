import React from 'react';

import { FormikProps, useFormikContext } from 'formik';

export const FormContext = React.createContext<
  FormikProps<unknown> | undefined
>(undefined);

export function useFormContext<T = unknown>() {
  const context = useFormikContext<T>();
  if (!context) throw new Error('Not used within provider');
  return context;
}
