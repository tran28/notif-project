import { Label, Button, Flex, Table, TableHead, TableRow, TableCell, TableBody } from '@aws-amplify/ui-react';

function ProductsTable({label, products, handleDelete}) {
    return (
        <Flex
        direction="column"
        alignItems="flex-start"
        wrap="nowrap"
        gap="1rem">
        <Flex>
          <Label style={{ fontSize: '20px' }}>{label}</Label>
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
                {products.map((product) => (
                    <TableRow key={product.product_id}>
                        <TableCell>{product.product_id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.merchant}</TableCell>
                        <TableCell>${product.price}</TableCell>
                        <TableCell>
                            <Flex
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                alignContent="flex-start"
                                wrap="nowrap"
                                gap="1rem"
                            >
                                {product.url}
                                <Button
                                    onClick={() => handleDelete(product.product_id)}
                                    variation="primary"
                                    colorTheme="error"
                                    size="small">
                                    Delete
                                </Button>
                            </Flex>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
      </Flex>
    );
}

export default ProductsTable;