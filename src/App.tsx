import React from 'react';

import { ScreenLoader } from 'ui/components';
import { ROOT_SESSION } from 'context/session';

const Public = React.lazy(() => import('pages/public'));
const Private = React.lazy(() => import('pages/private'));

function App() {
  const { isAuthenticated } = React.useContext(ROOT_SESSION);

  return (
    <>
      <React.Suspense fallback={<ScreenLoader />}>
        {isAuthenticated ? <Private /> : <Public />}
      </React.Suspense>
    </>
  );
}

export default App;
