import Home from './components/Home/Home';
import Carrito from './components/Carrito/Carrito';
import DataProvider from './components/Context/DataContext';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}


export default App;
