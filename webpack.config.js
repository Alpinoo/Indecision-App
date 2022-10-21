const path = require('path');

module.exports = {
   entry: './src/app.js', //where should webpack start?
   output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
   },
   module: {
      rules: [
         {
            loader: 'babel-loader',
            test: /\.js$/, //look for .js files
            exclude: /node_modules/,
         },
         {
            test: /\.s?css$/, //look for .css files. Used ? because we may need css as well (normalize.css)
            use: [
               'style-loader',
               'css-loader',
               'sass-loader', //converts scss to css
            ], //use: array of loaders
         },
      ],
   },
   devtool: 'eval-cheap-module-source-map',
   devServer: {
      static: path.join(__dirname, 'public'),
   },
};
