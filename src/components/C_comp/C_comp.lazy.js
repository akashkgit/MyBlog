import React, { lazy, Suspense } from 'react';

const LazyC_comp = lazy(() => import('./C_comp'));

const C_comp = props => (
  <Suspense fallback={null}>
    <LazyC_comp {...props} />
  </Suspense>
);

export default C_comp;
