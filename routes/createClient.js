const app = require('express').Router();
const Client = require('../models/clients');

app.post('/client', (req,rep)=>{
    Client.create({
        clientId: req.body.clientId,
        clientSecret: req.body.clientSecret
    })

    .then((response)=>{
        rep.send(response)
    })

    .catch((err)=>{
        console.log(err);
    })
})

module.exports = app