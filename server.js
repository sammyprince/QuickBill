const path = require("https://sammyprince.github.io/QuickBill");
const express = require("https://sammyprince.github.io/QuickBill");

const app = express();

app.use('https://sammyprince.github.io/QuickBill/dist', 'https://sammyprince.github.io/QuickBill/dist'));
app.use('https://sammyprince.github.io/QuickBill/assets''https://sammyprince.github.io/QuickBill/assets'));

app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'https://sammyprince.github.io/QuickBill/index.html'));
});

app.listen(8000, function () {
    console.log('App listening on port 8000!');
});
