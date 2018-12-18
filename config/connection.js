// Variable to use for mysql dependencies
var mysql = require("mysql");
var env = require("dotenv");

// Variable to reference the database connection
var connection = null;

// Create the connection to mysql and what database
if (process.env.JAWSDB_URL) 
{
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
connection = mysql.createConnection(
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
