//allows us to do HTTP requests on a node server 
//express works ONLY with node
const express = require("express"); 
const app = express(); 

const homePage = require('./routes/index.js'); 
const aboutPage = require('./routes/about.js');

//location on system we run the code could really use any port 
const port = 3000; 

//allows access to public folder (i.e. our picture)
app.use(express.static("public")); 

app.use('/', homePage); 
app.use('/about', aboutPage); 

//when running file, listen on port, and output console log
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})