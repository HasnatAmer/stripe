var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




// function
// const token = request.body.stripeToken; // Using Express
//
// const charge = stripe.charges.create({
//     amount: 999,
//     currency: 'usd',
//     description: 'Example charge',
//     source: token,
// });
module.exports = router;
