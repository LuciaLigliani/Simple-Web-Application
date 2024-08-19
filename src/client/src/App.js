import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import PageNotFound from './components/pageNotFound';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                {/* All possible routes in the application */}
                <Routes>
                    {/* Calculator URL */}
                    <Route path="/" element={<Calculator />} />
                    {/* Any other URL */}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </Router>    
    );
}

export default App;
