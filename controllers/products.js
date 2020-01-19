const { products } = require('../data/products.js')
const counter = products.length;

const list = (req, res) => {
   return res.json(products)
}

const show = (req, res) => {
    const obs = parseInt(req.params.id - 1)
    res.json(products[obs])
}

const create = (req, res) => {
    const newProduct =  {
        "_id": 1,
        "name": req.body.name,
        "description": req.body.description,
        "rating": req.body.rating,
        "imgUrl": "http://dummyimage.com/136x167.bmp/cc0000/ffffff",
        "price": req.body.price,
        "category": req.body.category,
        "reviews": [{
          "description": req.body.reviewsDescription,
          "rating": req.body.rating
        }, {
          "description": req.body.reviewsDescription,
          "rating": req.body.rating
        }, {
          "description": req.body.reviewsDescription,
          "rating": req.body.rating
        }, {
            "description": req.body.reviewsDescription,
            "rating": req.body.rating
        }, {
            "description": req.body.reviewsDescription,
            "rating": req.body.rating
        }, {
            "description": req.body.reviewsDescription,
            "rating": req.body.rating
        }, {
            "description": req.body.reviewsDescription,
            "rating": req.body.rating
        }, {
            "description": req.body.reviewsDescription,
            "rating": req.body.rating
        }, {
            "description": req.body.reviewsDescription,
            "rating": req.body.rating
        }, {
            "description": req.body.reviewsDescription,
            "rating": req.body.rating
        }]
      }

      if(!newProduct.name){
        return res.status(400).json({msg: 'Please enter name.'})
      }
      
      products.push(newProduct);
      res.json(products);
      console.log(req.body)
}

const update = (req, res) => {
    const update = products[req.params.id - 1]
    products[req.params.id - 1] = update
    res.send(products[req.params.id - 1])
}

module.exports = { list, show, create, update }