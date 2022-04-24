import './App.css'
import { Product } from './components/Product'
import {Routes, Route} from "react-router-dom"
import { Users } from './components/User';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { ProductDetails } from './components/ProductDetails';

function App() {


  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </div>
  );
}

export default App
