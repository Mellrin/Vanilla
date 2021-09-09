const path = require('path');
module.exports = {
    mode: 'development',
    entry: ['./src/index.js', './src/styles.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                use: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ],
            },
            {
                test: /\.s[ac]ss$/i, // include .sass files
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './[name].css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};