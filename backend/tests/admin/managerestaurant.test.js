import request from "supertest";
import app from "../../index.js";
import Db from '../../db.js'


// db connection tests
  beforeAll(async () => await Db.connect());
  afterAll(async() => await Db.disconnect());

  // test for app listening on port
  describe("Test the root path", () => {
    test("GET call", done => {
      request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });

let restId,restrefNo;

  describe('Testing the RestaurantRouter',()=>{

    test('Test posting a restaurant', async()=>{
      const res = await request(app).post("/admin/restaurant").send({
        name: "Dummy Restaurant",
        city: "Dummy City",
        street: "Dummy street",
        zipcode: "Dummy zipcode",
        restImg: "Dummy image",
      });
      restId=res.body._id;
      restrefNo=res.body.refNo;
      // expect(res.statusCode).toBe(201);
      expect(res.body.name).toBe("Dummy Restaurant");
      
      //let's check that the last item added was indeed newItem object
      //it should contain the restaurant "sent from Jest!"
      const restaurant = await request(app).get('/admin/restaurant/'+restrefNo)
      expect(restaurant.statusCode).toBe(200)
      expect(restaurant.body.name).toBe('Dummy Restaurant')
    })

    test('Test Get all Restaurants from db', async ()=> {
      const restaurants = await request(app).get('/admin/restaurant')
      expect(restaurants.statusCode).toBe(200)
      expect(restaurants.body.length).toBeGreaterThan(0)
      
    });

    test('Test Get specific restaurant', async ()=>{
      let restaurant = await request(app).get('/admin/restaurant/'+restrefNo)
      expect(restaurant.statusCode).toBe(200)
      expect(restaurant.body.name).toBe('Dummy Restaurant')

      restaurant = await request(app).get('/admin/restaurant/'+'WrongRefNo')
      expect(restaurant.statusCode).toBe(200)
      expect(restaurant.body.name).toBe(undefined)

    });

    test('Test update the restaurant',async()=>{
      const res=await request(app).put('/admin/restaurant/'+restId).send({
        city: "Dummy City changed",
        street: "Dummy street changed",
        zipcode: "Dummy zipcode changed",
        restImg: "Dummy image changed"
      }).expect(200)

      const restaurant = await request(app).get('/admin/restaurant/'+restrefNo)
      expect(restaurant.statusCode).toBe(200)
      expect(restaurant.body.location.City).toBe('Dummy City changed')

      // for wrong reference number
      await request(app).get('/admin/restaurant/'+"Wrongrefno").expect("Content-Type", /json/).expect('')

    })


    test('Test delete the restaurant',async()=>{
      const r= await request(app).delete('/admin/restaurant/'+restId).expect(200)
      //restaurant is deleted. Now check if exists in db or not, we should get undefined as it is deleted
      const restaurant = await request(app).get('/admin/restaurant/'+restrefNo)
      expect(restaurant.statusCode).toBe(200)
      expect(restaurant.body.name).toBe(undefined)

      //now restaurant is deleted. let's delete again with same reference number, we should get 'Restaurant doesn't exist'
      await request(app).delete('/admin/restaurant/'+restId).expect(200).expect("Restaurant doesn't exist")
    })

  })