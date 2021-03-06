// Variable used to set up express
var express = require("express");

// Variable used to set up the router
var router = express.Router();

// Variable used to to bring in burger.js
var burger = require("../models/burger.js");


////// Start the functions route for the burgers ///////

// GET route for getting all of the burgers
router.get("/", (req, res) => {
    burger.all(function(data) {
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);
      });
});

// Get Index Page render burgers to the DOM
router.get('/index', (req, res) =>
{
    burger.all(function(data) {
      var hbsObject = { burgers: data };
      res.render('index', hbsObject);
    });
  });

// POST the route for the burgers
router.post("/api/burgers", function(req, res) 
{
    // Insert the burger into the database
    burger.insert([
        "burger_name", "devoured"
    ], [req.body.burger_name, req.body.devoured], function(result)  {
        res.json({
            id: result.insertId
        });
    });
});

// PUT the burgers as devoured in api by id if eaten
router.put("/api/burgers/:id", function(req, res) 
{
    var condition = "id = " + req.params.id;
    
    // Display the id test
    console.log("condition", condition);

    // Update the burgers condition
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result)  {
        if (result.changedRows === 0) 
        {
            return res.status(404).end();
        } 
        else 
        {
            res.status(200).end();
        }
    });
});  

// export the router
module.exports = router;
