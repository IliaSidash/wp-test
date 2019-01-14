const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: [
        './src/js/index.js',
        './src/sass/style.sass'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/bundle.js'
    },

    devtool: 'source-map',
    
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, 'src/sass'),
                exclude: /(node_modules|bower_components)/,
                use: [
                    
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         ident: 'postcss',
                    //         // url: false,
                    //         plugins: [
                    //             require('autoprefixer')({
                    //                 // cascade: false
                    //             })
                    //         ]
                    //     }
                    // },

                    {
                        loader: 'resolve-url-loader',
                        options: {
                            engine: 'rework'
                        }
                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sourceMapContents: false
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/style.bundle.css'
        }),
    ]
};