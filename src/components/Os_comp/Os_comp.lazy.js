import React, { lazy, Suspense } from 'react';

const LazyOs_comp = lazy(() => import('./Os_comp'));

const Os_comp = props => (
  <Suspense fallback={null}>
    <LazyOs_comp {...props} />
  </Suspense>
);

export default Os_comp;
