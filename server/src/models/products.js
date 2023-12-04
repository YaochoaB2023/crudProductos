import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    cantidad: {
        type: Number,
        require: true
    },
    precio: {
        type: Number,
        require: true
    }
}, {
    timestamps: true
});

export default mongoose.model( "Producto", productoSchema )