const express = require("express");
const router = express.Router();

const Roupa = require("../models/Roupa");

// POST
router.post("/", async (req, res) => {

    try {

        const roupa = new Roupa(req.body);

        await roupa.save();

        res.status(201).json(roupa);

    } catch (erro) {

        res.status(400).json({ erro: erro.message });

    }

});

// GET
router.get("/", async (req, res) => {

    const roupas = await Roupa.find();

    res.json(roupas);

});

// GET POR ID
router.get("/:id", async (req, res) => {

    try {

        const roupa = await Roupa.findById(req.params.id);

        if (!roupa)
            return res.status(404).json({ mensagem: "Roupa não encontrada" });

        res.json(roupa);

    } catch {

        res.status(400).json({ mensagem: "ID inválido" });

    }

});

// PUT
router.put("/:id", async (req, res) => {

    try {

        const roupa = await Roupa.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(roupa);

    } catch {

        res.status(400).json({ mensagem: "Erro ao atualizar" });

    }

});

// DELETE
router.delete("/:id", async (req, res) => {

    try {

        await Roupa.findByIdAndDelete(req.params.id);

        res.json({
            mensagem: "Roupa excluída!"
        });

    } catch {

        res.status(400).json({
            mensagem: "Erro ao excluir"
        });

    }

});

module.exports = router;