const express = require("express");
const bodyParser = require("body-parser");
const contacts = require('./data/contacts')
const vehicles = require('./data/vehicles')
const comments = require('./data/comments')
const products = require('./data/products')
const contactsController = require('./controllers/contacts')
const commentsController = require('./controllers/comments')
const productsController = require('./controllers/products')
const vehiclesController = require('./controllers/vehicles')
const app = express();
const router = express.Router()

const vehicleRoutes = require('./routes/vehicles')
const contactsRoutes = require('./routes/contacts')
const commentsRoutes = require('./routes/comments')
const productsRoutes = require('./routes/products')
app.use(express.static('public'))

const port = process.env.PORT || 4001;

app.use('/comments', commentsRoutes)
app.use('/contacts/', contactsRoutes)
app.use('/products', productsRoutes)
app.use('/vehicles', vehicleRoutes)
app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
