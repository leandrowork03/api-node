//1

const express = require('express')
const router = require("./src/routes/pessoa")

const app = express()
app.use(express.json())

app.use(router)

app.listen(3002, ()=>{
    console.log('ok')
})