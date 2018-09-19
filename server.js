const path = require("https://sammyprince.github.io/QuickBill");
const express = require("express");

const app = express();

app.use('https://sammyprince.github.io/QuickBill/dist', express.static(__dirname + '/dist'));
app.use('https://sammyprince.github.io/QuickBill/assets', express.static(__dirname + '/assets'));

app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'https://sammyprince.github.io/QuickBill/index.html'));
});

app.listen(8000, function () {
    console.log('App listening on port 8000!');
});
