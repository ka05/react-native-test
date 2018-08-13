var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')


module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./index.web.ts",
    output: {
        filename: "bundle.js"
    },
    devServer: {
        filename: 'bundle.js',
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    resolve: {
        extensions: [".web.js", ".js", ".web.jsx", ".jsx", ".web.ts", ".ts", ".web.tsx", ".tsx"],
        alias: {
            'react-native': 'react-native-web',
        }
    },
    module: {
        rules: [
            { test: /\.web.ts|\.web.tsx|\.ts|\.tsx?$/, loader: "babel-loader!ts-loader" },
            /*  use: [
                'babel-loader',
                'awesome-typescript-loader'
              ]
            },*/
            { test: /\.js|\.jsx?$/, //loader: "babel-loader!ts-loader" },
              use: [
                'babel-loader',
              ],
              exclude: /node_modules/
            },
            //{ test: /\.ts?$/, loader: "babel-loader!ts-loader" },

            { test: /\.css$/, use: ["style-loader", "css-loader"]}
        ]
    }
};
