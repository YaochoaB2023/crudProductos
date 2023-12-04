import { Router } from "express";
import { getProducts ,createProduct, updateProduct, deleteProduct } from "../controllers/productos.controller.js";

const router = Router()
router.post('/createProduct', createProduct)
router.get('/getProducts', getProducts)
router.put('/updateProduct/:id', updateProduct)
router.delete('/deleteProduct/:id', deleteProduct)

export default router