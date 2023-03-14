import { req } from 'services';

import { IRegisterForm } from './_types';

export const login = (payload: IRegisterForm) =>
  req.post({
    url: '/login',
    payload,
  });
