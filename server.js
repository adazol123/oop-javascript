const express = require('express')
const app = express()
const port = process.env.PORT | 3004
const member = require('./api/member')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//body parser from json object (application/json)
const jsonParser = bodyParser.json()
app.use(jsonParser)

//body parser from form element (application/x-www-form-urlencoded)
app.use(bodyParser.urlencoded({extended: false}))

//use the public directory to store static files 
app.use(express.static('public'))


app.use('/', member)

app.listen(port, async function(){
    try {
        let uri = `mongodb+srv://adazol123:boysupot123@pegaxy.yxitn.mongodb.net/oop-tutorial?retryWrites=true&w=majority`
        await mongoose.connect(uri, { keepAlive: true })
        console.log('✅ Server is listening to port ' + port)
        console.log('➡️  http://localhost:' + port)
        
    } catch (error) {
        console.log('❎ Error occurred: ' + error.message)
    }
})
