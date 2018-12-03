// Variable used to set up express
var express = require("express");

// Variable used to set up the router
var router = express.Router();

// Variable used to to bring in burger.js
var burger = require("../models/burger");


////// Start the functions route for the burgers ///////

// GET route for getting all of the burgers
router.GET("/", (req, res) => 
{
    burger.all(data => 
    {
        var burgersObject = 
        {
            burger: data
        };
        console.log(burgersObject);
        res.render("index", burgersObject);
    })
});

// POST the route for the burgers
router.POST("/api/burgers", (req, res) => 
{
    // Insert the burger into the database
    burger.insert([
        "burger_name", "devoured"
    ], [req.body.burger_name, req.body.devoured], result => {
        res.json({
            id: result.insertId
        });
    });
});

// PUT the burgers as devoured in api by id if eaten
router.PUT("/api/burgers/:id", (req, res) => 
{
    var condition = "id = " + req.params.id;
    
    // Display the id test
    console.log("condition", condition);

    // Update the burgers condition
    burger.update({
        devoured: req.body.devoured
    }, condition, result => {
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
