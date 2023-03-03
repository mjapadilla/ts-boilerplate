import { Route, Routes as Switch } from 'react-router-dom';

import Home from './_Home';

function Public() {
  return (
    <Switch>
      <Route path="/*" element={<Home />} />
    </Switch>
  );
}

export default Public;
