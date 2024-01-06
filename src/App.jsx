import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <div>
      <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title='Bookstore' />} />
          <Route path={'/product/:itemId'} element={<ItemDetailContainer/>} />
          <Route path={'/category/:categoryId'} element={<ItemListContainer title='Bookstore'/>}/>
          <Route path={'/author/:authorId'} element={<ItemListContainer title='Bookstore'/>}/>
          <Route path={'/cart'} element={<Cart/>}/>
          <Route path={'*'} element={<PageNotFound/>}/>        
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
