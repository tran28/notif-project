import React, { useState, useEffect } from 'react';
import { post, get } from 'aws-amplify/api';
import { TextField, Button, Flex, Card, Label, Table, TableHead, TableRow, TableCell, TableBody } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    merchant: '',
    price: '',
    url: '',
  });

  // const [products, setProducts] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // try {
    //   const response = await post('serverless-api', '/product', { body: product });
    //   console.log('Post successful!', response);
    //   fetchProducts();
    // } catch (error) {
    //   console.error('Error posting data:', error);
    // }
  };

  // const fetchProducts = async () => {
  //   try {
  //     const response = await get('serverless-api', '/products');
  //     setProducts(response);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <>
      <Card variation="elevated">
        <Flex
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          alignContent="flex-start"
          wrap="nowrap"
          gap="1rem">
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
            <TextField name="id" placeholder="ID" value={product.id} onChange={handleInputChange} />
            <TextField name="name" placeholder="Name" value={product.name} onChange={handleInputChange} />
            <TextField name="merchant" placeholder="Merchant" value={product.merchant} onChange={handleInputChange} />
            <TextField name="price" placeholder="Price" type="number" value={product.price} onChange={handleInputChange} />
            <TextField name="url" placeholder="URL" type="url" value={product.url} onChange={handleInputChange} />
            <Button onClick={handleSubmit} variation="primary">Submit</Button>
          </Flex>

        </Flex>
      </Card>

      <Card>
        <Flex
          direction="column"
          alignItems="flex-start"
          wrap="nowrap"
          gap="1rem">
          <Flex>
            <Label style={{ fontSize: '20px' }}>All Products</Label>
          </Flex>


          <Table
            highlightOnHover={false}
            size="small"
            variation="striped">
            <TableHead>
              <TableRow>
                <TableCell as="th">Product ID</TableCell>
                <TableCell as="th">Product Name</TableCell>
                <TableCell as="th">Merchant</TableCell>
                <TableCell as="th">Price</TableCell>
                <TableCell as="th">URL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Rare Beauty Lip Tint</TableCell>
                <TableCell>Sephora</TableCell>
                <TableCell>$26.95</TableCell>
                <TableCell>url.com/rb1</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>2</TableCell>
                <TableCell>Nail Polish</TableCell>
                <TableCell>Chanel</TableCell>
                <TableCell>$45.00</TableCell>
                <TableCell>url.com/ch2</TableCell>
              </TableRow>
              <TableRow>
              <TableCell>3</TableCell>
                <TableCell>Dove Deodorant</TableCell>
                <TableCell>Shopper's Drug Mart</TableCell>
                <TableCell>$4.99</TableCell>
                <TableCell>url.com/sdm3</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Flex>
      </Card>
    </>
  );
}

export default App;
