import React, { lazy, Suspense } from 'react';

const LazyJava_comp = lazy(() => import('./Java_comp'));

const Java_comp = props => (
  <Suspense fallback={null}>
    <LazyJava_comp {...props} />
  </Suspense>
);

export default Java_comp;
