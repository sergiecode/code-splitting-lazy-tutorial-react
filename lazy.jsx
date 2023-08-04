

import React, { lazy, Suspense } from 'react';

const MyLazyComponent = lazy(() => import('./MyLazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyLazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
