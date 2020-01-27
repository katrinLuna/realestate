const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    context: __dirname,
    mode: isProduction ? 'production' : 'development',
    entry: {
        styles: ['./sass/main.scss']
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader?url=false',
              'postcss-loader',
              'sass-loader'
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
           filename: 'bundle.css'
        })
    ]
};
