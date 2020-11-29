require('dotenv').config()
const app = require('express').Router();


app.get('/auth', (req,rep)=>{
    // rep.redirect('https://github.com/login/oauth/authorize?client_id=' + process.env.github_client_id)
    rep.json({
        url: "https://github.com/login/oauth/authorize?client_id=" + process.env.github_client_id
    })
})

module.exports = app