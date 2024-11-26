const express = require('express')
const app = express()

// import router
const filmRoute = require('./routes/filmRoute')

//middleware
app.use(express.json())

//routes
app.use('/film', filmRoute)


app.listen(8000, () =>{
    console.log("Serveur à l'écoute");
} )