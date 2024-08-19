import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const calculate = async () => {
        // Validate input fields
        if (num1 === '' || num2 === '') {
          setError('Both numbers are required.');
          setResult(''); // Clear any previous result
          return;
        }

        // Clear the error if inputs are valid
        setError('');
        try {
            const response = await axios.post('http://localhost:3000/api/calculate', {
                num1: parseInt(num1),
                num2: parseInt(num2),
            });
            console.log(response.data);
            setResult(response.data.result);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container">
            <h1>Simple Arithmetic Calculator</h1>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Enter first number"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Enter second number"
            />
            <button onClick={calculate}>Calculate</button>
            {error && <p className="error">{error}</p>}
            {result && <p>Result: {result}</p>}
        </div>
    );
}

export default App;
