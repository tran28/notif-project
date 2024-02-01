import React, { useState, useEffect } from 'react';
import { TextField, Button, Flex, Label, Alert } from '@aws-amplify/ui-react';
import { createProduct } from '../api/api';

function ProductForm({ onProductUpdate }) {
    const initialProductState = {
        product_id: '',
        name: '',
        merchant: '',
        price: '',
        url: '',
    };

    const [product, setProduct] = useState(initialProductState);
    const [successAlert, setSuccessAlert] = useState(false);
    const [priceErrorAlert, setPriceErrorAlert] = useState(false);
    const [allFieldsFilled, setAllFieldsFilled] = useState(false);

    useEffect(() => {
        // Check if all fields are filled
        setAllFieldsFilled(Object.values(product).every(field => field.trim() !== ''));
    }, [product]);

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;

        // Update product state
        const updatedProduct = { ...product, [name]: value };
        setProduct(updatedProduct);

        // Price validation
        if (name === "price" && type === "number") {
            const numericValue = parseFloat(value);
            if (numericValue <= 0) {
                setPriceErrorAlert(true);
            }
            else {
                setPriceErrorAlert(false);
            }
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare your product data by trimming whitespace and formatting the price
        const productData = Object.keys(product).reduce((acc, key) => {
            acc[key] = key === 'price' ? parseFloat(product[key]).toFixed(2) : product[key].trim();
            return acc;
        }, {});

        try {
            await createProduct(productData);
            setProduct(initialProductState); // Reset form
            setSuccessAlert(true);
            setTimeout(() => setSuccessAlert(false), 5000);
            onProductUpdate(); // Callback to inform the parent component
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <>
            {successAlert && (
                <Alert variation="success" isDismissible={true} onDismiss={() => setSuccessAlert(false)}>
                    Product added successfully!
                </Alert>
            )}
            {priceErrorAlert && (
                <Alert variation="error" isDismissible={false}>
                    Price must be greater than 0.
                </Alert>
            )}
            <Flex
                direction="row"
                justifyContent="center"
                alignItems="center"
                wrap="nowrap"
                gap="5rem">
                <Label style={{ fontSize: '20px' }}>Add a New Product</Label>
                <Flex
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
                    <Button onClick={handleSubmit} variation="primary" isDisabled={priceErrorAlert || !allFieldsFilled}>Submit</Button>
                </Flex>
            </Flex>
        </>
    );
}

export default ProductForm;
