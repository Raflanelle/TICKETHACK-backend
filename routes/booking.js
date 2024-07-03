var express = require('express');
var router = express.Router();

const Cart = require('../models/carts');
const Booking = require('../models/booking');

//récupère les objets contenu dans la bdd cart et les ajoute à la bdd booking
router.post('/', (req, res) => {
    
    Cart.find().then(data => {
        for (let i = 0; i < data.length; i++) {

        const newBooking = new Booking({
            departure: data[i].departure,
            arrival: data[i].arrival,
            date: data[i].date,
            price: data[i].price
        })
        
        newBooking.save()
        }

        res.json({result: true, booking: data})
        
    })
})

//récupère les trajets et renvoie une réponse au frontend
router.get('/', (req, res) => {
    Booking.find().then(trajetPaye => {
        if (!trajetPaye[0]) {
            res.json({result: false});
        } else {
            res.json({result: true, trajets: trajetPaye})
        }
    })
})

module.exports = router;