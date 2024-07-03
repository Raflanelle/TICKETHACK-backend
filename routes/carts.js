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

//afficher panier
router.get('/', (req, res) => {
    Cart.find().then(data => {
        if (!data[0]) {
            res.json({result: false})
        } else {
            res.json({result: true, carts: data})
        }
    })
})

//rm un element du panier
router.delete('/:id', (req, res) => {
    Cart.deleteOne({_id: req.params.id})
    .then(data => {
        if (data.deletedCount > 0) {
            Cart.find().then(data => {
                res.json({result: true, cart: data})
            })
        } else {
            res.json({result: false, error: 'probleme de supression'})
        }
    })
})

//rm tout le panier apres purchase
router.delete('/', (req, res) => {
    Cart.deleteMany({})
    .then(() => {
        res.json({result: true})
    })
})


module.exports = router;