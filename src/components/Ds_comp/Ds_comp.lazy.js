import React, { lazy, Suspense } from 'react';

const LazyDs_comp = lazy(() => import('./Ds_comp'));

const Ds_comp = props => (
  <Suspense fallback={null}>
    <LazyDs_comp {...props} />
  </Suspense>
);

export default Ds_comp;
