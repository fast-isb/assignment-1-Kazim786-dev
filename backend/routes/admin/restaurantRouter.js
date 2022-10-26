import express from 'express'
const router = express.Router()
import Restaurant from '../../models/admin/restaurant.js'

//, { find, findById }

router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.find()
        // sorting function on restaurant names
        restaurants.sort((r1, r2) => (r1.name > r2.name) ? 1 : (r1.name < r2.name) ? -1 : 0);
        res.json(restaurants)
    } catch (err) {
        res.send('Error : ' + err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.find()

        // find restaurant by refno from array containg fetched results from database
        res.json(restaurant.find(rest => rest.refNo === req.params.id))
    } catch (err) {
        res.send('Error ' + err)
    }
})


router.post('/', async (req, res) => {
    let date_ob = new Date();
    // let date=("0"+(date_ob.getMonth()+1)).slice(-2)
    const res1 = new Restaurant(
        {
            name: req.body.name,
            location: { City: req.body.city, street: req.body.street, zipcode: req.body.zipcode },
            dateCreated: {
                date: date_ob.getDate() + "-" + date_ob.getMonth() + "-" + date_ob.getFullYear(),
                time: date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds()
            },
            restImg: req.body.restImg
        }
    )

    try {
        const r1 = await res1.save()
        res.send(r1)
    } catch (err) {
        res.send('Error while saving the Restaurant object\n' + err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id)
        restaurant.location.City = req.body.city
        restaurant.location.street = req.body.street
        restaurant.location.zipcode = req.body.zipcode
        restaurant.restImg = req.body.restImg

        //upsert:false => will not create new record if not exists
        const r1 = await Restaurant.updateOne(Restaurant.findById(req.params.id), restaurant, { upsert: false })
        res.json(r1)
    } catch (err) {
        res.send('Error while updating the restaurant object' + err)
    }

})

router.delete('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id)
        res.send("restaurant deleted\n")
        const r1 = await restaurant.delete()
        //window.alert(`Restaurant "${restaurant.name}" is deleted`)  
    } catch (err) {
        res.send('Error while deleting the restaurant object')
    }

})


export default router