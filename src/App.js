import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';
import Oder from './components/Oder/Oder';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>} />
        <Route path="/order" element={<Oder></Oder>} />
        <Route path="/review" element={<Shop></Shop>} />
        <Route path="/inventory" element={<Inventory></Inventory>} />
        <Route path="/login" element={<Shop></Shop>} />
      </Routes>
    </div>
  );
}

export default App;
