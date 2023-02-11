import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './containers/Home';
import Page from './containers/Page';
import Contact from './containers/Contact';
import Treatments from './containers/treatments/Treatments';

const App = () => {
  return (
    <Routes>
      <Route path='/*' element={<Home />} />
      <Route path='/about' element={<Page />} />
      <Route path='/treatments' element={<Treatments />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default App