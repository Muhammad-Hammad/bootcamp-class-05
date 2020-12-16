import { useState } from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext';
function App() {

  let countState= useState(1)
  return (
    <div>
      <CounterContext.Provider value={countState}>
      <div><Parent/></div>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
