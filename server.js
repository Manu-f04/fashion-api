const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

const roupasRoutes = require("./routes/roupas");

// Permite receber JSON
app.use(express.json());

// Rotas
app.use("/roupas", roupasRoutes);

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ Conectado ao MongoDB!");
    })
    .catch((err) => {
        console.log("❌ Erro ao conectar:", err);
    });

// Rota de teste
app.get("/", (req, res) => {
    res.send("Fashion API está funcionando!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});