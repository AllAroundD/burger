// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm")

async function getAvailable(){
    const burgers = await orm.selectAll()
    console.log(`burgersAvailable`,burgers)
    return burgers.filter(burger=>burger.devoured == false)
}

async function getDevoured(){
    const burgers = await orm.selectAll()
    return burgers.filter(burger=>burger.devoured == true)
}

async function addBurger(name){
    return orm.addBurger(name)
}

async function devourBurger(id){
    return orm.updateBurger(id, "devoured", true)
}

module.exports = {
    getAvailable, getDevoured, addBurger, devourBurger
}