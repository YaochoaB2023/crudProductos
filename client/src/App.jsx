import './App.css'
import ProductosPage from './pages/productosPage.jsx'
import { ProductsProvider } from './context/productosContext.jsx'

function App() {

  return (
    <>
    <ProductsProvider>
      <ProductosPage/>
    </ProductsProvider>
    </>
  )
}

export default App
