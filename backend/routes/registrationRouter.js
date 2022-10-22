import express from 'express'
const router = express.Router()
import Manager from '../models/RestaurantManager.js'

router.post('/' , async(req,res)=>{
    let date_ob = new Date();
    const m = new RestaurantManager({
        name:{
            fname:req.body.fname,
            lname:req.body.lname
        },
        email:req.body.email,
        password:req.body.password,
        RestRefNo:req.body.refNo,
        dateCreated: {
            date: date_ob.getDate() + "-" + date_ob.getMonth() + "-" + date_ob.getFullYear(),
            time: date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds()
        },
        role:req.body.role
    });
    
     const email=m.email
     const RestRefNo=m.RestRefNo
    try {
            let oldman = await Manager.findOne({email})
            if(oldman!==null){
                // console.log("already exist with this email")
                return res.json({error:"User already exists with this email"})
            }
            oldman = await Manager.findOne({RestRefNo})
            if(oldman!==null){
                //console.log("already exist with this refno")
                return res.json({error:"User already exists with this ref No"})
            }

            const m1 =await m.save()
            console.log("added")
            res.send(m1)
        
    } catch (error) {
        console.log("error in registration : "+error)
    }
})

router.post('/login', async (req, res) => {
    const email=req.body.email;
    const password=req.body.password;
    const refNo=req.body.refNo;
    try {
        let oldman = await Manager.findOne({email})
        if(oldman.password===password && oldman.RestRefNo === refNo){
            // console.log("found")
            res.send(oldman)
            role=oldman.Role
        }
        else{
            // console.log("not found")
            res.send({Error:"Not found"})
        }
        // find restaurant by refno from array containg fetched results from database
        // res.json(manager.find(man => manager.RestRefNo === req.params.id))
    } catch (err) {
        res.send('Error ' + err)
    }
})

export default router