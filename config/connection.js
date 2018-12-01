// Variable to use for mysql dependencies
var mysql = require("mysql");

// Variable to create the connection to mysql and what database
var connection = mysql.createConnection(
    {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

// Make the connection with the database sn send correct message if successful
connection.connect(function(err) 
{
  if (err) 
  {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export the connection for our orm.js to use.
module.exports = connection;
