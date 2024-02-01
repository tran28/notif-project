import React, { useState, useEffect } from 'react';
import {Card} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ProductsTable from './components/ProductsTable';
import { fetchProducts } from './api/api';
import ProductForm from './components/ProductForm';

function App() {
  const [products, setProducts] = useState([]);

  const handleProductUpdate = async () => {
    const updatedProducts = await fetchProducts();
    setProducts(updatedProducts);
  };

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    getProducts();
  }, []);

  return (
    <>
      <Card variation="elevated">
        <ProductForm onProductUpdate={handleProductUpdate} />
      </Card>

      <Card variation="elevated" style={{ marginTop: '1rem' }}>
        <ProductsTable products={products} onProductUpdate={handleProductUpdate}/>
      </Card>
    </>
  );
}

export default App;
