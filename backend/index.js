// const express = require('express')
// const mongoose = require('mongoose')
import express from 'express'
import cors from "cors"
import Db from './db.js';


Db.connect()



const app = express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send
    ("All Ok!")
});

// Manage restaurant by Admin
import ManageResbyAdmin from './routes/admin/restaurantRouter.js'
app.use('/admin/restaurant',ManageResbyAdmin)

//Registration
import register from './routes/registrationRouter.js'
app.use('/',register)

export default app;

// app.listen(port, () => {
//     console.log(`Server started at port ${port}`)
// })