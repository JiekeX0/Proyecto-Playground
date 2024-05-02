
import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import TableCarts from './components/TableCarts';
import ProductsTable from './components/TableProducts';
import AddNewProduct from './components/AddNewProduct/AddNewProduct';
import { FilterByCategory } from './components/FilterByCategory';


function App() {

  return (

    <>          
      <NavBar />

      <Routes>
        <Route path="/products" element={<ProductsTable />} />
        <Route path="/cart" element={<TableCarts />} />
        <Route path="/new-product" element={<AddNewProduct />} />
        <Route path="/filter-category" element={<FilterByCategory/>}/>
      </Routes>
    </>
  )
}

export default App
