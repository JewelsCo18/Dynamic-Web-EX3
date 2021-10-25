const express = require("express"); 
const router = express.Router(); 

//defined route in the index.js file no need to redefine in the get below
router.get('/', (req, res) => {
    res.send(`
    <h1> About Page </h1>
    <p> This is the about page! </p>
    <p> <a href="about/me"> Learn about me here! </a></p>
    `)
})

router.get('/me', (req, res) => {
    res.send(`
    <h1> About Me </h1>
    <p> Stuff about me</p>
    <p> <a href="about"> Return to About Page </a></p>
    `)
})

module.exports = router; 