import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title='Bookstore' />} />
          <Route path={'/product/:itemId'} element={<ItemDetailContainer/>} />
          <Route path={'/category/:categoryId'} element={<ItemListContainer title='Bookstore'/>}/>
          <Route path={'/author/:authorId'} element={<ItemListContainer title='Bookstore'/>}/>
          <Route path={'/cart'} element={<h2>Shopping cart</h2>}/>
          <Route path={'*'} element={<PageNotFound/>}/>        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
