import mongoose from "mongoose";

const uri = 'mongodb://localhost/FoodDeliveryDB'
const con = mongoose.connection

const connect =()=>{
    mongoose.connect(uri, {
        useNewUrlParser:true
    })

    con.on('open', () => {
        console.log('Database connected...')
    })
}

const disconnect = ()=>{
    mongoose.disconnect(uri)
    con.off('close',()=>{console.log("Database disconnected!!!")})
}

export default {connect,disconnect}
