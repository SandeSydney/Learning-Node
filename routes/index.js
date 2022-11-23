const { Router } = require('express')
const { getTrainees, addTrainee, updateTrainee, deleteTrainee, getaTrainee } = require('../controller')

const router = Router()

router.get('/', getTrainees)
router.post('/',addTrainee)
router.get('/:id', getaTrainee)
router.put('/:id', updateTrainee)
router.delete('/:id', deleteTrainee)

// Export the router. Has all methods
module.exports = {
    router
}