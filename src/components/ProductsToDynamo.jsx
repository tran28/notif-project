import React, { useState, useEffect } from 'react';
import { Card } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ProductsTable from './ProductsTable';
import { fetchProducts } from '../api/dynamoMethods';
import ProductForm from './ProductForm';

function ProductsToDynamo() {
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
                <ProductForm handleProductUpdate={handleProductUpdate} />
            </Card>

            <Card variation="elevated" style={{ marginTop: '1rem' }}>
                <ProductsTable products={products} handleProductUpdate={handleProductUpdate} />
            </Card>
        </>
    );
}

export default ProductsToDynamo;