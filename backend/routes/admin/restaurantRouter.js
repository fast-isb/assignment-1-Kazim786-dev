import express from 'express'
const router = express.Router()
import Restaurant from '../../models/admin/restaurant.js'


router.get('/', async(req,res) => {
    try{
        const restaurants = await Restaurant.find()
        // sorting function on restaurant names
        restaurants.sort( (r1, r2) => (r1.name > r2.name) ? 1 : (r1.name < r2.name) ? -1 : 0 );
        res.json(restaurants)
    }catch(err){
        res.send('Error : ' + err)
    }
})

router.post('/', async(req,res) => {
    let date_ob=new Date();

    const res1 = new Restaurant( 
        {
            name: req.body.name,
            location : {City: req.body.city , street: req.body.street , zipcode: req.body.zipcode},
            dateCreated:{
                date:date_ob.getDate()+"-"+date_ob.getMonth()+"-"+date_ob.getFullYear() , 
                time:date_ob.getHours()+":"+date_ob.getMinutes()+":"+date_ob.getSeconds()
            },
            restImg : req.body.restImg
        } 
    )

    try{
        const r1 =  await res1.save()
        res.send(r1)
    }catch(err){
        res.send('Error while saving the Restaurant object\n'+err)
    }
})


export default router