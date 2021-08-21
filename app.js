const express = require('express');
const app = express();

//app.use(express.static('public'));                          // Gør mappen /public tilgængelig for app.

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/index/index.html")
});


app.get('/*', (req, res) => {
    return res.status(501).send({ data: "Could not find the page" });
});

const port = process.env.PORT || 80;

app.listen(Number(port), (error) => {
    if (error) {
        console.log('Fejl ved opstart af server.');
    }
    console.log('Server startet på port:', port);
});
