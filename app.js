

const express = require('express')

const cors = require('cors')

const app = express()


var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))


app.use('/okta',require('./okta/oktaroutes'))
app.listen(3000, () => {
    console.log('Server started!')
})



