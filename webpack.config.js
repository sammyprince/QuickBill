const path = require('path');
const webpack = require('webpack');

let env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

let BASE_URL = {
    development: "'https://sammyprince.github.io/QuickBill'"
}

module.exports = {
    entry: {
        index: 'https://sammyprince.github.io/QuickBill/app/index.js'
