const app = require('express').Router();


app.get('/home', (req,rep)=>{
    rep.send("Bienvenido")
})


module.exports = app