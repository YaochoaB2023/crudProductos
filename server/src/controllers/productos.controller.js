import Producto from '../models/products.js'

export const createProduct = async ( req,res ) => {
    try {

        const { nombre, descripcion, cantidad, precio } = req.body
        console.log(req.body);
        const newProduct = new Producto( {
            nombre, 
            descripcion, 
            cantidad, 
            precio
        });

        const savedProduct = await newProduct.save() 
        console.log('producto creado con exito');
        res.status(200).json(savedProduct)
    } catch (error) {
        console.error('Error creating product:');
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

export const getProducts = async ( req,res ) => {
    try {
        const products = await Producto.find();
        res.json(products);
    } catch (error) {
        console.error('Error find products:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

export const updateProduct = async ( req,res ) => {
    try {
        const { nombre, descripcion, cantidad, precio } = req.body

        const updatedProduct = await Producto.findByIdAndUpdate(
            req.params.id,
            {
              nombre,
              descripcion,
              cantidad,
              precio,
            },
            { new: true }
          );

          if (!updatedProduct) {
            return res.status(404).json({ message: "product not Found" });
          }
      
          res.status(201).json(updatedProduct);
    } catch (error) {
        console.error('Error updating products:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

export const deleteProduct = async ( req, res ) =>
{
    try {
        const product = await Producto.findByIdAndDelete( req.params.id )
        if ( !product ) return res.status( 404 ).json( { message: "product not found" } )
        return res.sendStatus( 204 )   
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }

}