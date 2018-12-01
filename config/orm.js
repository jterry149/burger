// Import MySQL connection.
var connection = require("../config/connection.js");

// Function to help with sql syntax
var printQuestionMarks = num => 
{
    // Variable for array
    var array = [];

    for (var i = 0; i < num; i++) 
    {
        array.push("?");
    }

    return array.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
var objToSql = (obj) => 
{
    // Variable to array
    var array = [];

    // Loop through the keys and push the key/value as a string into the array
    for (var key in obj) 
    {
        var value = obj[key];
        
        // Check to skip hidden properties
        if (Object.hasOwnProperty.call(obj, key)) 
        {
            // if string with spaces, add quotations
            if (typeof value === "string" && value.indexOf(" ") >= 0) 
            {
                value = "'" + value + "'";
            }
           
            // Push the value into the array
            array.push(key + "=" + value);
        }
    }

    // Put the array into a string of the object
    return array.toString();
}








/// Start of the functions needed to query the database ///
var orm = {

    // The function selectAll
    selectAll: (tableInput, callback) => 
    {
        // Variable to select from the table
        var queryStr = "SELECT * FROM " + tableInput + ";";
        
        // Connect to the database return result or error
        connection.query(queryStr, (err, result) =>
        {
            if(err)
            {
                throw err;
            }
            callback(result);
        });
    },

    // The function insertOne
    insertOne: (table, cols, vals, callback) => 
    {
        // Variable to insert into the table
        var queryStr = "INSERT INTO " + table;

        // Build the queryStr 
        queryStr += " (";
        queryStr += cols.toString();
        queryStr += ") ";
        queryStr += "VALUES (";
        queryStr += printQuestionMarks(vals.length);
        queryStr += ") ";

        // Display the string to test 
        console.log(queryStr);

        // Connect to the database and call results or error
        connection.query(queryStr, vals, (err, result) => 
        {
            if (err) 
            {
                throw err;
            }
            callback(result);
        });
    },

    // The function updateOne
    updateOne: (table, objColVals, condition, callback) =>
    {
        // Variable to update the table
        var queryStr = "UPDATE " + table;

        // Build the query for table
        queryStr += " SET ";
        queryStr += objToSql(objColVals);
        queryStr += " WHERE ";
        queryStr += condition;

        // Connect to the database and return result or error
        connection.query(queryStr, (err, results) => 
        {
            if (err)
            {
                throw err;
            }
            callback(results);   
        });
    }
}
// Export the orm object for the model for the (burger.js).
module.exports = orm;