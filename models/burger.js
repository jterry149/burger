// Variable to bring in the orm.js dependencie
var orm = require("../config/orm");

// Variable to to bring in the functions used to query the burgers database
var burger = 
{
    // Callback the selectAll function
    selectAll: callback => 
    {
        orm.selectAll("burgers", res =>
        {
            callback(res);
        })
    },

    // Callback the insertOne function
    insert: (cols, vals, callback) =>
    {
        orm.insertOne("burgers", cols, vals, res =>
        {
            callback(res);
        })
    },

    // Callback the updateOne function
    update: (objColVals, condition, callback) => 
    {
        orm.updateOne("burgers", objColVals, condition, res =>
        {
            callback(res);
        })
    }

}

// Export the burgers.js for the orm
module.exports = burger;