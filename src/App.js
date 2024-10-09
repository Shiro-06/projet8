import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const router = (
  <Router>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/accomodation/:id" element={<Accomodation />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

function App() {
  return (
    <>
      {router}
    </>
  );
}

export default App;