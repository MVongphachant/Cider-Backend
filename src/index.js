const express = require('express')
const cors = require('cors')
require('./database/mongoose')
const ciderRouter = require('./routers/cider-routes')
const userRouter = require('./routers/user-routes')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api/ciders', ciderRouter)
app.use('/api/users', userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})