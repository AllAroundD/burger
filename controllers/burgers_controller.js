const burger = require("../models/burger");

function router(app){
    app.get("/", async function(req, res){
        console.log('[GET] getting list of burgers')
        
        res.redirect("/index.html");
    })
}

module.exports = router