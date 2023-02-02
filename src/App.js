import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';
import Oder from './components/Oder/Oder';
import LogIn from './components/LogIn/LogIn';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './RequireAuth';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>} />
        <Route path="/home" element={<Shop></Shop>} />
        <Route path="/shop" element={<Shop></Shop>} />
        <Route path="/order" element={<Oder></Oder>} />
        <Route path="/review" element={<Shop></Shop>} />
        <Route path="/inventory" element={<RequireAuth><Inventory></Inventory></RequireAuth>} />
        <Route path="/shipment" element={<Shipment></Shipment>}></Route>
        <Route path="/login" element={<LogIn></LogIn>} />
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
