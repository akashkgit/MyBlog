import React, { lazy, Suspense } from 'react';

const LazyBooks_StickyNotes_comp = lazy(() => import('./Books_StickyNotes_comp'));

const Books_StickyNotes_comp = props => (
  <Suspense fallback={null}>
    <LazyBooks_StickyNotes_comp {...props} />
  </Suspense>
);

export default Books_StickyNotes_comp;
