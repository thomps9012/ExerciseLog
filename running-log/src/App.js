import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RunLog from "./pages/RunLog";

function App() {
  return (
    <Router>
        <div>
            <Route component={RunLog} />
        </div>
    </Router>
  );
}

export default App;
