import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './containers/Home';
import Page from './containers/Page';
import Treatments from './containers/treatments/Treatments';

const App = () => {
  return (
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/about' element={<Page />} />
      <Route path='/treatments' element={<Treatments />} />
    </Routes>
  )
}

export default App