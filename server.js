const express = require('express')
const { router } = require('./routes')

const app = express()

// Create a body parser
app.use(express.json())

// Call router
app.use('/trainee', router)

app.listen(4000, () => {
    console.log('Application has started Now');
})