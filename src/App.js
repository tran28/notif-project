import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Flex, Card, Label, Table, TableHead, TableRow, TableCell, TableBody, Alert } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ProductsTable from './components/ProductsTable';

function App() {
  const [product, setProduct] = useState({
    product_id: '',
    name: '',
    merchant: '',
    price: '',
    url: '',
  });

  const [products, setProducts] = useState([]);

  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Create a new object with trimmed fields
    const product_trimmed = Object.keys(product).reduce((acc, key) => {
      acc[key] = product[key].trim();
      return acc;
    }, {});

    try {
      const response = await axios.post('https://76y03qxeo7.execute-api.us-east-1.amazonaws.com/production/product', product_trimmed);
      console.log('Post successful!', response);
      fetchProducts();
      setShowAlert(true);

      // Reset the product state to its initial state
      setProduct({
        product_id: '',
        name: '',
        merchant: '',
        price: '',
        url: '',
      });
      setTimeout(() => setShowAlert(false), 5000);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const url = 'https://76y03qxeo7.execute-api.us-east-1.amazonaws.com/production/product';
      const body = { product_id: productId };
      await axios.delete(url, { data: body });
      console.log('Delete successful!');
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://76y03qxeo7.execute-api.us-east-1.amazonaws.com/production/products');
      setProducts(response.data.products); // Make sure to use response.data to get the actual data
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {showAlert && (
        <Alert variation="success" isDismissible={true} onDismiss={() => setShowAlert(false)}>
          Product added successfully!
        </Alert>
      )}

      <Card variation="elevated">
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="flex-start"
          wrap="nowrap"
          gap="5rem">
          <Flex>
            <Label style={{ fontSize: '20px' }}>Add a New Product</Label>
          </Flex>
          <Flex
            style={{ padding: '1rem 3rem 1rem 3rem' }}
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            alignContent="flex-start"
            wrap="nowrap"
            gap="1rem">
            <TextField name="product_id" placeholder="ID" value={product.product_id} onChange={handleInputChange} />
            <TextField name="name" placeholder="Name" value={product.name} onChange={handleInputChange} />
            <TextField name="merchant" placeholder="Merchant" value={product.merchant} onChange={handleInputChange} />
            <TextField name="price" placeholder="Price" type="number" value={product.price} onChange={handleInputChange} />
            <TextField name="url" placeholder="URL" type="url" value={product.url} onChange={handleInputChange} />
            <Button onClick={handleSubmit} variation="primary">Submit</Button>
          </Flex>

        </Flex>
      </Card>

      <Card variation="elevated" style={{ marginTop: '1rem' }}>
        <ProductsTable label={"All products"} products={products} handleDelete={handleDelete} />
      </Card>
    </>
  );
}

export default App;
