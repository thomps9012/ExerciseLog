import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../Navigation';

const App = () => (
    <div>
        <h1>App</h1>
        <Router>
            <Navigation />
        </Router>
    </div>
);

export default App;