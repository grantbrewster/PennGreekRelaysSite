// the router
const router = require('express').Router();

// this is the mongoose model
let User = require('../models/user.model');

// endpoint to handle http get requests 
router.route('/').get((req, res) => {
    // mongoose method to get all the users and find
    // return in json format the users from database
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:email').get((req, res) => {
    User.findOne({email: req.params.email})
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;

  const newUser = new User({username, email});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
