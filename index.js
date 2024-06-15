const express = require('express');
const ejs = require('ejs');


const app = express();

app.get('/', function (req,res) {

	res.send("Hello");
});

const port = 5000;
app.listen(port, () => console.log(`Server is running at port ${port}`));

