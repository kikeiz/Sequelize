require('dotenv').config()
const app = require('express').Router();
const axios = require('axios')

app.get('/oauth-callback', ({query: {code}}, res)=>{
    const body = {
        client_id: process.env.github_client_id,
        client_secret: process.env.github_secret,
        code,
    };
    const opts = {headers : {accept: 'application/json'}};

    axios.post('https://github.com/login/oauth/access_token', body, opts)
    .then((response)=>{
        console.log(response.data.access_token);
        return response.data.access_token
    })

    .then((token)=>{
        console.log("My token: " + token);
        res.send('/?token=' + token)
    })

    .catch((err)=>{
        console.log(err);
    })
})

module.exports = app