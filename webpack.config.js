module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
          // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
          {
              test: /\.tsx?$/,
              loader: 'ts-loader'
          },
          {
              test: /\.html$/, // Only .html files
              loader: 'html' // Run html loader
          },
          {
              test: /\.css/, // Only .json files
              loader: 'style!css' // Run raw loader
          }
        ]
    }
}