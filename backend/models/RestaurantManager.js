
import mongoose from "mongoose"
import { nanoid } from 'nanoid';

const RestaurantManagerSchema = new mongoose.Schema({

    name: {
        type: Object,
        required: true
    },
    email: {
        type: String,
        required: true,
        index:{ unique : true }
    },
    password: {
        type: String,
        required: true,
    },
    RestRefNo:{
        type:String,
        required: true,
        index: { unique: true },
    },
    dateCreated:{
        type:Object,
        required:true,
    },
    Role:{
        type:String,
        default : "Manager"
    }
})

export default mongoose.model('RestaurantManager',RestaurantManagerSchema)