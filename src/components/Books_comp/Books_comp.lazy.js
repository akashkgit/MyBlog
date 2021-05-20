import React, { lazy, Suspense } from 'react';

const LazyBooks_comp = lazy(() => import('./Books_comp'));

const Books_comp = props => (
  <Suspense fallback={null}>
    <LazyBooks_comp {...props} />
  </Suspense>
);

export default Books_comp;
