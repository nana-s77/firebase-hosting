import React from 'react';
import { BrowserRouter, Route, Routes,} from 'react-router-dom';
import { About } from './components/pages/About/About';
import { Top } from './components/pages/Top/Top';
import ReactGA4 from "react-ga4";

// 測定ID
ReactGA4.initialize('G-M49R57NM2D');
ReactGA4.send({hitType: "pageview", page: window.location.pathname});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Top />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
