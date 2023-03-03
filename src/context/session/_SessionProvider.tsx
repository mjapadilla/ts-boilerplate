import React from 'react';

import { useAuth } from './_hooks';
import { ROOT_SESSION } from './_constants';

type Props = {
  children?: React.ReactNode;
};

function SessionProvider({ children }: Props) {
  const [, authenticated] = useAuth();

  const [isAuthenticated, setIfAuthenticated] = React.useState(authenticated);

  const x = React.useMemo(
    () => ({ isAuthenticated, setIfAuthenticated }),
    [isAuthenticated]
  );

  return <ROOT_SESSION.Provider value={x}>{children}</ROOT_SESSION.Provider>;
}

SessionProvider.defaultProps = {
  children: 'Children',
};

export default SessionProvider;
