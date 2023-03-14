import React from 'react';

import Cookie from 'js-cookie';
import { storage } from 'utils';
import { useMutation } from 'services';

import * as actions from './_actions';
import { IRegisterForm } from './_types';

export const useLogin = () => {
  const { isLoading, mutate } = useMutation(actions.login);

  const action = React.useCallback(
    (payload: IRegisterForm, cb: () => void) => {
      mutate(payload, {
        onSuccess: (res) => {
          const { token = [], role = [], user } = res;
          Cookie.set('_token', token);
          Cookie.set('user_key', String(new Date(user?.updated_at).getTime()));
          storage.set('permissions', ['static-access'] || []);
          storage.set('role', role || []);
          cb();
        },
      });
    },
    [mutate]
  );

  return [isLoading, action] as const;
};
