import React from 'react';
import {BrowserRouter as Router, Routes, Route,Link,Switch} from 'react-router-dom';
import { About } from './About';

export const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/about' Component={About} />
      
      </Routes>
    
    </Router>
  )
}
