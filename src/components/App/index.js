import '../../App.css';
import Home from '../Home';
import NavBarComp from '../NavBarComp';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Products from '../Products';
import Product from '../Product';
import PageNotFound from '../PageNotFound';
import Login from '../Login';

//import Search from "../Search"
function App() {
  return (

    <Router>
      <NavBarComp />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
     
      </Router>
    
  );
}

export default App;

