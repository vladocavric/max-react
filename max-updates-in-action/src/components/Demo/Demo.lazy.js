import React, { lazy, Suspense } from 'react';

const LazyDemo = lazy(() => import('./Demo'));

const Demo = props => {
  console.log('lazy demo is running')
  return(
  <Suspense fallback={null}>
    <LazyDemo {...props} />
  </Suspense>
)};

export default React.memo(Demo);
