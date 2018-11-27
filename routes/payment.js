var express = require('express');
var router = express.Router();
// var stripe  = require('stripe')('pk_test_vXAWdJvKCqroSfeXXol2afN7');
// var stripe  = require('stripe')('sk_test_YDMx3aap1jxy7skZey5LTeCnt');
// sk_test_YDMx3aap1jxy7skZey5LTeCn
// var cron = require("node-cron");
// var nodemailer  = require("nodemailer");


router.get('/checkout', function(req, res, next) {
    res.render('checkout');
});
var stripe = require("stripe")('sk_test_ZHe67Y865T8tiWh1x4w9wccD');

router.post('/checked',function(req,res,next){
    //secret key is used here
    console.log(req.body);
     token = req.body.stripeToken;

    stripe.charges.create({
        amount: 2000,
        currency: "USD",
        source: token, // obtained with Stripe.js
        description: "PROPERTY KI DESCRIPTION"
    }, function(err, charge) {
        if(err){
            console.log('error occures');
            // res.redirect('/checkout'+err);
            res.send(err);
        }

        if(charge){
            console.log("Congratulations! You bought");
        res.send(charge);
    }
    });
});

// cron.schedule("* * * * *", function() {
//     console.log("pehli wali crone job");
// });

// create mail transporter
// let transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: "parwaaztechnologies@gmail.com",
//         pass: "44332211hasnAT"
//     }
// });
// cron.schedule("* * * * *", function()
// {
//     console.log("Running Cron Job");
//     let mailOptions = {
//         from: "parwaaztechnologies@gmail.com",
//         to: "parwaaztechnologies@gmail.com",
//         subject: 'Property Purchased',
//         text: `Here will be the purchasing details of the customer`,
//     };
//     transporter.sendMail(mailOptions, function(error, info) {
//         if (error) {
//             throw error;
//         } else {
//             console.log("Email successfully sent!");
//         }
//     });
// });


module.exports = router;
