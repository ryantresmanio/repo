import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SidebarUser from './components/SidebarUser';
import FAQ from './components/FAQ';
import { Dashboard } from './components/Dashboard';
import  Greetings from './components/Greetings';

function App() {
  return (
    <div>
      <Router>
        <SidebarUser />
        <Greetings/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/help" element={<FAQ />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
