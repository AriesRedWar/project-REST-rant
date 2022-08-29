const router = require("express").Router();
const places = require("../models/places.js");

router.get("/", (req, res) => {
  //     let places = [{
  //         name: 'H-Thai-ML',
  //         city: 'Seattle',
  //         state: 'WA',
  //         cuisines: 'Thai, Pan-Asian',
  //         pic: '/images/Rustic Restaurant.jpg'
  //       }, {
  //         name: 'Coding Cat Cafe',
  //         city: 'Phoenix',
  //         state: 'AZ',
  //         cuisines: 'Coffee, Bakery',
  //         pic: '/images/Rustic Restaurant 2.jpg'
  //       }]
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.post("/", (req, res) => {
  // console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { places: places[id]})
  }
})



module.exports = router;
