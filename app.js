import express from "express";
import bodyParser from "body-parser"
import routes from "./module/routes"
import errorhandler from "./middleware/errorhandler"

const app = express()
require('./model')

app.use(bodyParser.json())
app.use(routes)

// index
app.get('/', (req, res) => {
    res.json({
        title: 'crud-api-express-jwt',
        body: 'By Cols - mcholismalik.official@gmail.com'
    })
})

app.use(errorhandler)

export default app
