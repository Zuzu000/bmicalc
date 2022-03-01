import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Form } from './components/form';


function App() {
  return (
    <div className="app">
      <div className='container container-fluid text-center'>
        BMI calculator
        <div className='form'>
          <Form/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
