var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');
const Cart = require('../models/carts');

//ajout dansd le panier
router.post('/', (req, res) => {
    const id = req.body.id;
    Trip.findById(id).then(data => {
        const newCart = new Cart({
            departure: data.departure,
            arrival: data.arrival,
            date: data.date,
            price: data.price
        })
        newCart.save()
        .then(data => {
            res.json({result: true, cart: data})
        })
    })
})


module.exports = router;