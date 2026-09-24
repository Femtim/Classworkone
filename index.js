const express = require('express')
app = express()
const mongoose = require('mongoose')

app.set('view engine', 'ejs')


require('dotenv').config()
const port = process.env.PORT
const DBURI = process.env.mongodb_URI

const friends = [
    {
        name: 'John Doe',
        age: 25,
        hobby: 'Reading'
    },
    {
        name: 'Jane Smith',
        age: 30,
        hobby: 'Painting'
    },
    {
        name: 'Mike Johnson',
        age: 28,
        hobby: 'Hiking'
    }
]

app.get('/', (req,res) =>{
    res.json(friends)
})

app.listen(port, () => {
    console.log('Server is running on port' )
})

mongoose.connect(DBURI).then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log('Error connecting to MongoDB:', err)
})