import { createContext, useContext, useState } from "react";
import { getAllProductsRequest, updateProductRequest, deleteProductRequest, createProductRequest } from "../api/products.js";

const ProductsContext = createContext()

export const useProducts = () => {
    const context = useContext( ProductsContext );

    if(!context){
        throw new Error ('useProducts must be used within a ProductsProvider')
    }
    return context
}

// eslint-disable-next-line react/prop-types
export function ProductsProvider ( { children } ) {
    
    const [ products, setProducts ] = useState([])
    console.log(products)


    const createProduct = async (newProductData) => {
        try {
          const res = await createProductRequest(newProductData);
          setProducts((prevProducts) => {
            // Agrega el nuevo producto al estado
            return [...prevProducts, res.data];
          });
        } catch (error) {
          console.log(error);
        }
    };

    const getAllProducts = async () => {
        try {
            const res = await getAllProductsRequest()
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const updateProduct = async (productId, updatedProductData) => {
        try {
          const res = await updateProductRequest(productId, updatedProductData);
          setProducts((prevProducts) => {
            // Actualiza el estado con el producto actualizado
            return prevProducts.map((product) => (product._id === productId ? res.data : product));
          });
        } catch (error) {
          console.log(error);
        }
    };

    const deleteProduct = async (productId) => {
        try {
          await deleteProductRequest(productId);
          setProducts((prevProducts) => {
            // Filtra el producto eliminado del estado
            return prevProducts.filter((product) => product._id !== productId);
          });
        } catch (error) {
          console.log(error);
        }
    };

    return (
        <ProductsContext.Provider value={ {
            products,
            createProduct,
            getAllProducts,
            updateProduct,
            deleteProduct
        } }>
            { children }
        </ProductsContext.Provider>
    )

}