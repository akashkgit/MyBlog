import React, { lazy, Suspense } from 'react';

const LazyPageno = lazy(() => import('./Pageno'));

const Pageno = props => (
  <Suspense fallback={null}>
    <LazyPageno {...props} />
  </Suspense>
);

export default Pageno;
