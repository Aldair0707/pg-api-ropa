const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/clothes', controllers.createClothing);
router.get('/clothes', controllers.getAllClothes);
router.delete('/clothes/:id', controllers.deleteClothing);
router.put('/clothes/:id', controllers.updateClothing);
router.get('/clothes/:id', controllers.getClothing);


module.exports = router;
