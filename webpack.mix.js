const mix = require('laravel-mix');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/src/index.tsx', 'public/src').react()
    .postCss('resources/css/index.css', 'public/css', [
        require('tailwindcss')
    ])
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/
                }
            ]
        },
        resolve: {
            extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
        }
    })
    .alias({
        '@App': path.join(__dirname, 'resources/src/App'),
        '@pages': path.join(__dirname, 'resources/src/pages'),
        '@screens': path.join(__dirname, 'resources/src/screens'),
        '@reducers': path.join(__dirname, 'resources/src/reducers'),
    });
