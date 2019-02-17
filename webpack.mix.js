const mix = require('laravel-mix');

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
//mix.config.vue.esModule = true
mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({
      output: {
        publicPath: '/',
        chunkFilename: 'js/lazy/[name].[chunkhash].js'
      },
      resolve: {
         extensions: ['.js', '.json', '.vue'],
         alias: {
           '~': path.join(__dirname, './resources/js')
         }
      },
      module: {
         noParse: [/videojs-contrib-hls/]
      }
      
   });
   
