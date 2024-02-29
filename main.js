const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.get('/', function(req, res){
    let options = {
        root: path.join(__dirname, 'html')
    }
    res.sendFile('./index.html', options);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});