import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import About from './Components/About';
import Legal from './Pages/Legal';
import WorldMap from './Components/WorldMap';
import PartnersPage from './Components/PartnersPage';
import NotFound from './Pages/NotFound';
import showing from './Assets/invt.jpg';
import ProductSection from './Components/ProductSection';
import SubProductDetails from './Components/SubProductDetails';

// App.js



const PartnerDetails = ({ match }) => {
  const partnerId = match.params.id;
  // Fetch partner details based on partnerId from your data or API

  return (
    <div>
      <h2>Partner Details for ID {partnerId}</h2>
      {/* Render partner details here */}
    </div>
  );
};


const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <img src={showing} alt="Popup Content" />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

function App() {
  const [showPopup, setShowPopup] = React.useState(false);

  React.useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      setShowPopup(true);
    }
  }, [showPopup]);

  const handleClosePopup = () => {
    localStorage.setItem('hasSeenPopup', 'true');
    setShowPopup(false);
  };

  return (
    <div className="App">
      {showPopup && <Popup onClose={handleClosePopup} />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners/:id" component={PartnerDetails} />
          <Route path="/partners" component={PartnersPage} />
          <Route path="/about" element={<About />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/worldmap" element={<WorldMap />} />
          <Route path="/products/*" element={<ProductSection />} />
          <Route path="/products/:productId" element={<SubProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
