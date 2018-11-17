// Import MySQL connection.
var connection = require("../config/connection.js");

// Functions needed for the orm.js file to query the mysql burgers_db.

//     selectAll()
//     insertOne()
//     updateOne()

// Export the orm object for the model for the (burger.js).
module.exports = orm;