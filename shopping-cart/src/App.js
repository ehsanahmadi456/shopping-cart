import './App.css';
import { Route, Routes, Navigate } from 'react-router';

// Component
import Store from "./components/Store";

// Context
import ProductContextProvider from './context/ProductContextProvider';
import ProductsDetails from './components/ProductsDetails';

function App() {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/products" element={<Store />} />
        <Route path="/*" element={<Navigate to="/products" />} />
      </Routes>
    </ProductContextProvider>
  );
}

export default App;
