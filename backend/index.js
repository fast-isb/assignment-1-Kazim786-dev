// const express = require('express')
// const mongoose = require('mongoose')
import express from 'express'
import mongoose from 'mongoose'
import cors from "cors"

const url = 'mongodb://localhost/FoodDeliveryDB'

const app = express()
const port = 3001;

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Database connected...')
})

app.use(express.json())
app.use(cors())


// Manage restaurant by Admin
import ManageResbyAdmin from './routes/admin/restaurantRouter.js'
app.use('/admin/restaurant',ManageResbyAdmin)

//Registration
import register from './routes/registrationRouter.js'
app.use('/',register)

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})