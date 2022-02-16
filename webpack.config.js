// Path
const path = require('path');
// Compression Webpack
const CompressionPlugin = require('compression-webpack-plugin');
// ZLIB
const zlib = require('zlib');
// HTML Webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');
// React Refresh Webpack Plugin
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// Typescript Rules
const typescriptRules = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
};

// Sass Rules
const sassRules = {
    test: /\.s[ac]ss$/i,
    use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
    ],
    exclude: /node_modules/
};

const fileLoaderRules = {
    test: /\.(png|jpe?g|gif|tiff)$/i,
    loader: 'file-loader',
    exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
    options: {
        esModule: false,
        name: '[name].[ext]',
    },
};

// Plugins
const plugins = (mode) => [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
        // compress: true,
        title: 'CheckList',
        'meta': {
            'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
            'author': 'Mario Tavarez',
            'description': 'Sistema de requisitos del Registro Público de la Propiedad para el área de oficialía de partes'
        }

    }),
    mode === 'production' && new CompressionPlugin({
        filename: "[path][base].br",
        algorithm: "brotliCompress",
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
            params: {
                [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
            }
        },
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false
    }),
    new ReactRefreshWebpackPlugin()
].filter(Boolean);

// Config
const config = (mode) => ({
    // Entry
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    // Output
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[bundle].[contenthash].js',
        clean: true
    },
    devtool: 'inline-source-map',
    // Dev Server
    devServer: {
        static: './build',
        historyApiFallback: true,
        port: 9000
    },
    // Resolve,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [typescriptRules, sassRules, fileLoaderRules],
    },
    // target: "web",
    // Plugins
    plugins: plugins(mode)
});

module.exports = (env, { mode }) => {
    mode === 'production' ? config.mode = 'production' : config.mode = 'development';
    return config(mode);
}