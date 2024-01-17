import { Routes, Route } from 'react-router-dom';

import { Home, Page1, Page2, Page3 } from './Pages';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page-1" element={<Page1 />} />
      <Route path="/page-2" element={<Page2 />} />
      <Route path="/page-3" element={<Page3 />} />
    </Routes>
  );
}

export default App;
