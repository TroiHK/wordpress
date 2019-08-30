const mix = require('laravel-mix');

const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// publicPath
// mix.config.publicPath = 'wp-content/themes/hkt';
const public_path = 'wp-content/themes/hkt/';

// resourceRoot
mix.config.resourceRoot = 'src';

// Change fonts output folder
mix.config.fileLoaderDirs.fonts = public_path + 'assets/fonts';

// Change images output folder
mix.config.fileLoaderDirs.images = public_path + 'assets/images';

if ( mix.config.production ) {
    // production
    mix.webpackConfig({
        plugins: [
            new CopyWebpackPlugin([{
                from: mix.config.resourceRoot + '/assets/images',
                to: mix.config.fileLoaderDirs.images,
            }]),
            new ImageminPlugin({
                test: /\.(jpe?g|png|gif|svg)$/i,
                plugins: [
                    imageminMozjpeg({
                        quality: 60,
                    })
                ]
            })
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    loader: 'import-glob-loader'
                },
            ]
        }
    });

    mix.js(mix.config.resourceRoot + '/assets/js/app.js', public_path + 'assets/js')
        .js(mix.config.resourceRoot + '/assets/js/landing.js', public_path + 'assets/js')
        .sass(mix.config.resourceRoot + '/assets/sass/app.scss', public_path + 'assets/css')
        .sass(mix.config.resourceRoot + '/assets/sass/landing.scss', public_path + 'assets/css');

} else {
    // development
    mix.config.sourcemaps = true;

    mix.webpackConfig({
        plugins: [
            new CopyWebpackPlugin([{
                from: mix.config.resourceRoot + '/assets/images',
                to: mix.config.fileLoaderDirs.images,
            }])
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    loader: 'import-glob-loader'
                }
            ]
        }
    });

    mix.js(mix.config.resourceRoot + '/assets/js/app.js', public_path + 'assets/js')
        .js(mix.config.resourceRoot + '/assets/js/landing.js', public_path + 'assets/js')
        .sass(mix.config.resourceRoot + '/assets/sass/app.scss', public_path + 'assets/css')
        .sass(mix.config.resourceRoot + '/assets/sass/landing.scss', public_path + 'assets/css').sourceMaps()
        .browserSync({
            proxy: 'http://hkt.local'
        });
}
