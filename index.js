//allows us to do HTTP requests on a node server 
//express works ONLY with node
const express = require("express"); 
const app = express(); 

const homePage = require('./routes/index.js'); 
const aboutPage = require('./routes/about.js');

const port = 3000; 

app.use(express.static("public")); 
app.use('/', homePage); 
app.use('/about', aboutPage); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})