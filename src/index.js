const express = require('express')
require('./database/mongoose')
const ciderRouter = require('./routers/cider-routes')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(ciderRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})