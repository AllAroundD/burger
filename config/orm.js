var db = require("../config/connection");

// select all records from the burgers table
function selectAll() {
    return db.query("SELECT * FROM burgers")
}

// insert the burger name into the burgers table
function insertOne(name) {
    return db.query("INSERT INTO burgers SET ?", { burgerName: name }
    )
}

// update one burger based on column and value passed
function updateOne(id, column, value) {
    return db.query("UPDATE burgers SET ? WHERE ?", [{ [column]: value, id }]
    )
}

module.exports = {
    selectAll, insertOne, updateOne
}