import React, { useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../App.css';

export const Form=()=> {
  const[height, setHeight]=useState(0);
  const[weight, setWeight]=useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calculate = (e) => {
    e.preventDefault();    
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      const bmi = (weight / ((height/100)^2))
      setBmi(bmi.toFixed(1))

      if (bmi < 18) {
        setMessage('You are underweight')
      } else if (bmi >= 18 && bmi < 25) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are overweight')
      }
      }
  }  


  const reload = () => {
      window.location.reload()
  }
    return (
      <div>
          <form onSubmit={calculate}>
          <div>
            <label className='label'>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label className='label'>Height (cm)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn btn-info' type='submit'>Submit</button>
            <button className='btn btn-secondary btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
        </form>
      </div>
    )
}
