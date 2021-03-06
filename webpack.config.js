const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/client')
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist/client'),
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
           template: './src/index.html',
           inject: 'body' 
        })
    ],
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
              test: /\.ts(x?)$/,
              exclude: /node_modules/,
              loader: 'ts-loader',
              options: {
                configFile: 'client.tsconfig.json'
              }
            },
            {
              enforce: 'pre',
              test: /\.js$/,
              loader: 'source-map-loader'
            }
          ]
    }
}