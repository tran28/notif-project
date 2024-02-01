import React, { useState } from 'react';
import { post } from 'aws-amplify/api';
import { TextField, Button, Flex, Card, Label } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    merchant: '',
    price: '',
    url: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await post('https://k9haajjm50.execute-api.us-east-1.amazonaws.com/dev', '/products', { body: product });
      console.log('Response:', response);
      // Handle response here (e.g., show a success message)
    } catch (error) {
      console.error('Error posting data:', error);
      // Handle error here (e.g., show error message)
    }
  };

  return (
    <div className="App">
      <Card variation="elevated">
        <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          alignContent="flex-start"
          wrap="nowrap"
          gap="1rem">
          <Label style={{ fontSize: '20px' }}>Add a New Product</Label>
          <TextField name="id" placeholder="ID" value={product.id} onChange={handleInputChange} />
          <TextField name="name" placeholder="Name" value={product.name} onChange={handleInputChange} />
          <TextField name="merchant" placeholder="Merchant" value={product.merchant} onChange={handleInputChange} />
          <TextField name="price" placeholder="Price" type="number" value={product.price} onChange={handleInputChange} />
          <TextField name="url" placeholder="URL" type="url" value={product.url} onChange={handleInputChange} />
          <Button onClick={handleSubmit} variation="primary">Submit</Button>
        </Flex>
      </Card>
    </div>
  );
}

export default App;
