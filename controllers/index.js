const models = require("../database/models");

// Crear prenda
const createClothing = async (req, res) => {
    console.log('Creating clothing item...');

    try {
        const clothing = await models.Clothes.create(req.body);
        return res.status(201).json({ clothing });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

// Eliminar prenda
const deleteClothing = async (req, res) => {
    console.log('Deleting clothing item...');

    try {
        const clothing = await models.Clothes.findOne({ where: { id: req.params.id } });
        if (clothing) {
            await clothing.destroy();
            return res.status(200).json({ deleted: req.params.id });
        } else {
            return res.status(404).json({ error: `Clothing item with ID ${req.params.id} not found` });
        }
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

// Actualizar prenda
const updateClothing = async (req, res) => {
    console.log('Updating clothing item...');

    try {
        const clothing = await models.Clothes.findOne({ where: { id: req.params.id } });
        if (clothing) {
            clothing.name = req.body.name;
            clothing.type = req.body.type;
            clothing.color = req.body.color;
            clothing.size = req.body.size;
            clothing.description = req.body.description;
            clothing.price = req.body.price;
            clothing.quantity = req.body.quantity
            await clothing.save();

            return res.status(200).json({ updated: clothing });
        } else {
            return res.status(404).json({ error: `Clothing item with ID ${req.params.id} not found` });
        }
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

// Obtener todas las prendas
const getAllClothes = async (req, res) => {
    console.log('Getting all clothing items...');

    try {
        const clothes = await models.Clothes.findAll();
        return res.status(200).json({ clothes });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

// Obtener prenda por ID
const getClothing = async (req, res) => {
    try {
        const clothing = await models.Clothes.findOne({ where: { id: req.params.id } });
        if (!clothing) {
            return res.status(404).json({ error: `Clothing item with ID ${req.params.id} not found` });
        }

        return res.status(200).json({ clothing });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

module.exports = {
    createClothing,
    getAllClothes,
    deleteClothing,
    updateClothing,
    getClothing
};
