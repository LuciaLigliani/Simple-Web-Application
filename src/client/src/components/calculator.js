import React, { useState } from 'react';
import axios from 'axios';

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const calculate = async () => {
        // Reset error and result
        setError(null);
        setResult(null);

        // Send the request to the server
        try {
            const response = await axios.post('http://localhost:3000/api/calculate', {
                num1: parseFloat(num1),
                num2: parseFloat(num2),
            });
            setResult(response.data.result);
        } catch (error) {
            if (error.response && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError('An unexpected error occurred.');
            }
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

export default Calculator;
