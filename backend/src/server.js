import express from "express";

import prodcutosRoutes from "./routes/productos.routes.js";

const app = express();  

app.use(express.json());

app.use("/api/productos", prodcutosRoutes);


const PORT =  3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});