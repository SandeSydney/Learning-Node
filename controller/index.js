const { v4 } = require('uuid')

// Sample data
const trainees = [
    {
        id: 'cefd8723-574e-400d-8447-e255b40defbc',
        name: 'John Doe',
        age: 251
    }
]


const getTrainees = (req, res) => {
    res.status(200).json(trainees)
}

const addTrainee = (req, res) => {
    const body = req.body
    const id = v4()
    const trainee = { id, ...body }
    trainees.push(trainee)
    res.status(201).send({ message: "User was created successfuly." })
}

const updateTrainee = (req, res) => {
    const { id } = req.params
    const body = req.body
    const index = trainees.findIndex(t => t.id === id)
    if (index >= 0) {
        trainees[index] = { id, ...body }
        res.status(200).json({ message: "User updated successfully!" })
    } else {
        res.status(404).json({ message: "User not found!" })
    }
}

const deleteTrainee = (req, res) => {
    const { id } = req.params
    const index = trainees.findIndex(t => t.id === id)
    if (index >= 0) {
        trainees.splice(index, 1)
        res.status(200).send({ message: "User deleted!" })
    } else {
        res.status(404).send({ message: "User not found" })
    }
}

const getaTrainee = (req, res) => {
    const { id } = req.params
    const trainee = trainees.find(t => t.id === id)
    if (!trainee) {
        return res.status(404).send({ message: 'User not found!' })
    }
    return res.status(200).send(trainee)
}

// Export the methods
module.exports = {
    getTrainees,
    getaTrainee,
    addTrainee,
    updateTrainee,
    deleteTrainee
}