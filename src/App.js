import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './containers/Home';
import Service from './containers/service/Service';

const App = () => {
  return (
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/services/:serviceId' element={<Service />} />
    </Routes>
  )
}

export default App