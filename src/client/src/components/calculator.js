import React, { useState } from 'react';
import axios from 'axios';
import Header from './header';

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

    const reset = () => {
        setNum1('');
        setNum2('');
        setResult('');
        setError('');
    };

    return (
        <div><Header />
            <div className="wrapper">
                <div className="container">
                    <div className="description">
                        <p>
                            Welcome to the Simple Arithmetic Calculator, an easy-to-use tool designed for a unique calculation.
                            The calculator goes beyond the basic sum by adding the first prime number greater than the higher of your two inputs.<br/>
                            How it works:
                            <ol>
                                <li>Enter two numbers in the provided fields</li>
                                <li>Click the "Calculate" button</li>
                                <li>Observe the result and move your mouse over the information icon next to the result to understand how it was calculated.</li>
                            </ol>
                            Try it out and see how it works!
                        </p>
                    </div>
                    <div className="calculator">
                        <div className="input-container">
                            <div>
                                <label htmlFor="num1">First Number:</label>
                                <input
                                    type="number"
                                    id="num1"
                                    value={num1}
                                    onChange={(e) => setNum1(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="num2">Second Number:</label>
                                <input
                                    type="number"
                                    id="num2"
                                    value={num2}
                                    onChange={(e) => setNum2(e.target.value)}
                                />
                            </div>
                        </div>
                        <button onClick={calculate}>Calculate</button>
                        <a href="/" className="reset-link" onClick={reset}>Reset</a>
                        {result && (
                            <p className='result'>
                                Result: {result}
                                <span className="tooltip">
                                    <img src="/Info.png" alt="Info" />
                                    <span className="tooltiptext">
                                        Calculation details: <br/> {num1} + {num2} + {result-num1-num2} = {result}
                                    </span>
                                </span>
                            </p>
                        )}
                        {error && <p className="error">{error}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
