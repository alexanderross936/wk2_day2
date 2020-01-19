const { vehicles } = require('../data/vehicles.js')
const counter = vehicles.length;

const list = (req, res) => {
   return res.json(vehicles)
}

const show = (req, res) => {
    const obs = parseInt(req.params.id - 1)
    res.json(vehicles[obs])
}

const create = (req, res) => {

    const newVehicle = {
        "_id": counter + 1,
        "imgUrl": "./featured-img-1.jpg",
        "year": req.body.year,
        "make": req.body.make,
        "model": req.body.model,
        "price": req.body.price,
        "km": req.body.km,
        "miles": req.body.miles,
        "fuel": req.body.fuel,
        "city": req.body.city,
        "isNew": false
      }

      if(!newVehicle.name){
        return res.status(400).json({msg: 'Please enter name.'})
      }
      
      contacts.push(newVehicle);
      res.json(vehicles);
      console.log(req.body)
}

const update = (req, res) => {
    const update = vehicles[req.params.id - 1]
    vehicles[req.params.id - 1] = update
    res.send(vehicles[req.params.id - 1])
}

module.exports = { list, show, create, update }