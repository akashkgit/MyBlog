import React, { lazy, Suspense } from 'react';

const LazyProject_comp = lazy(() => import('./Project_comp'));

const Project_comp = props => (
  <Suspense fallback={null}>
    <LazyProject_comp {...props} />
  </Suspense>
);

export default Project_comp;
