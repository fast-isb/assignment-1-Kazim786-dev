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

export default connect
