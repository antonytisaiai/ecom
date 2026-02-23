import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import Product from './pages/Product';
import Vendor from './pages/Vendor';
import Checkout from './pages/Checkout';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="product" element={<Product />} />
            <Route path="vendor" element={<Vendor />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}
