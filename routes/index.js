var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');
const Trip = require('../models/trips');

//POST /travel : route chargée de vérifier l'existence d'un trajet 
router.post('/travel', (req, res) => {
  //verifie si undefined or null
  if (!req.body.departure || !req.body.arrival || !req.body.date) {
    res.json({ result: false, error: 'Misssing or empty field' });
    return;
  }
  //aucun utilisateur est trouvé avec cet email et mdp
  Trip.findOne({ departure: req.body.departure, arrival: req.body.arrival }).then(trips => {

    if (trips === null) {
      res.json({ result: false, error: 'No trips exist' });
      return
    }
  })
      const jour = new Date(req.body.date).getDay()
      console.log(jour)
      const mois = new Date(req.body.date).getMonth() + 1
      console.log(mois)
      Trip.find().then(voyages => {
        for (let i = 0; i < voyages.length; i++)
          
        if (voyages[i].date.getMonth() != mois && voyages[i].date.getDay() != jour) {
          res.json({ result: false, error: "pas de voyage à cette date"});
        } else {

          res.json({ result: true });
          console.log(voyages)
        }
      })
  
});



module.exports = router;


// || trips.arrival === null