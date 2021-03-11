
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const myarr = [];

app.get('/', (req, res) => {
    let key = req.query.key;
    myarr.push(key);
    res.send('Done')
});

app.get('/show', (req, res)=> {
    res.send(myarr)
})

app.listen(8000, () => console.log("Server started at port 8000."))


