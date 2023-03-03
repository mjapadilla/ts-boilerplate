import React from 'react';

import { Brand } from 'ui/components';
import Login from 'features/authentication';

function Home() {
  return (
    <div className="flex w-screen h-screen bg-primary-50">
      <div className="m-auto card px-10 py-14 space-y-5 w-full md:max-w-screen-sm mx-auto">
        <div className="flex justify-center">
          <Brand className="h-auto w-24" />
        </div>
        <Login />
      </div>
    </div>
  );
}

export default Home;
