import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home';
import TermsAndConditions from './Screens/TermsAndConditions';
import PrivacyPolicy from './Screens/PrivacyPolicy'
import About from './Screens/About';
import ContactUs from './Screens/ContactUs';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/About" element={<About />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
  </Router>
  );
}

export default App;
