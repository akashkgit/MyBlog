import React, { lazy, Suspense } from 'react';

const LazyAuthor = lazy(() => import('./Author'));

const Author = props => (
  <Suspense fallback={null}>
    <LazyAuthor {...props} />
  </Suspense>
);

export default Author;
