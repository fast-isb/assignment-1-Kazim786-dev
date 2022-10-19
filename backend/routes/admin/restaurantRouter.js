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


export default router