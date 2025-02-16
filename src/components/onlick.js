import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Greenhouse from './greehouse';
import Solarpanel from './solar';
import Environment from './environment';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
      <div className='free-top'>
      <Router>
        <div >
  
          <Routes>
            <Route path="/Greenhouse" exact element={<Greenhouse/>} />
            <Route path="/Solarpanel" element={< Solarpanel/>} />
            <Route path="/Environment" element={<Environment/>} />
         
          </Routes>
          <div className='flex'>
           
              <p className=''>
                <Link to="/Greenhouse">Greenhouse</Link>
              </p>
              <p>
                <Link to="/Solarpanel">Solar panels</Link>
              </p>
              <p>
                <Link to="/Environment">Environment</Link>
              </p>
              
           
          </div>
        </div>
      </Router>
      </div>
    );
  }
  
  export default App;
  