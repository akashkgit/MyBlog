import React, { lazy, Suspense } from 'react';

const LazyStickyNotes_comp = lazy(() => import('./StickyNotes_comp'));

const StickyNotes_comp = props => (
  <Suspense fallback={null}>
    <LazyStickyNotes_comp {...props} />
  </Suspense>
);

export default StickyNotes_comp;
