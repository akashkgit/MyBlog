import React, { lazy, Suspense } from 'react';

const LazyComment = lazy(() => import('./Comment'));

const Comment = props => (
  <Suspense fallback={null}>
    <LazyComment {...props} />
  </Suspense>
);

export default Comment;
