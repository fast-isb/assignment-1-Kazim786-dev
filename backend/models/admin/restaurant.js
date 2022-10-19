//const mongoose = require('mongoose')
import mongoose from "mongoose"
import { nanoid } from 'nanoid';

const RestaurantSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    location: {
        type: Object,
        required:true
    },
    refNo:{
        type:String,
        required: true,
        default: () => nanoid(7),
        index: { unique: true },
    },
    dateCreated:{
        type:Object,
        required:true,
    },
    restImg:{
        type:Array,
        default:[],
        required:true
    }


})

export default mongoose.model('Restaurant',RestaurantSchema)
// module.exports = mongoose.model('Restaurant',RestaurantSchema)