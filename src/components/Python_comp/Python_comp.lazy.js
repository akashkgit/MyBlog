import React, { lazy, Suspense } from 'react';

const LazyPython_comp = lazy(() => import('./Python_comp'));

const Python_comp = props => (
  <Suspense fallback={null}>
    <LazyPython_comp {...props} />
  </Suspense>
);

export default Python_comp;
