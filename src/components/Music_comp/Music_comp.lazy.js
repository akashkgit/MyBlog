import React, { lazy, Suspense } from 'react';

const LazyMusic_comp = lazy(() => import('./Music_comp'));

const Music_comp = props => (
  <Suspense fallback={null}>
    <LazyMusic_comp {...props} />
  </Suspense>
);

export default Music_comp;
