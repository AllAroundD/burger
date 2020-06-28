// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm")

async function getAvailable(){
    const burgers = await orm.selectAll()
    return burgers.filter(burger=>burger.devoured == false)
}

module.exports = {
    getAvailable
}