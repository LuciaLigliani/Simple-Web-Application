import React from 'react';
import Header from './header';

function PageNotFound() {
    return (
        <div>
            <Header />
            <div className='not-found'>
                <img src="/PageNotFound.png" alt="404 Not Found" />
                <h1>404</h1>
                <p>Oops... Page Not Found</p>
                <a href="/" className="reset-link">Go back to the calculator</a>
            </div>
        </div>
    );
}

export default PageNotFound;
