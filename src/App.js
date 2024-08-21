import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Proposal from './components/Proposal';
import Yes from './components/Yes';
import EnvelopeAnimation from './components/EnvelopeAnimation';
import PdfViewer from './components/PdfViewer';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect root path to /env */}
   
        
        <Route path="/env" element={<EnvelopeAnimation />} />  
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/yes" element={<Yes />} />
        {/* Include other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
