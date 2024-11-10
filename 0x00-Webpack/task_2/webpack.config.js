const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',  // Single entry point
  output: {
    filename: 'bundle.js', // Ensure the single output file
    path: path.resolve(__dirname, 'public'),
  },
  mode: 'production',  // Production mode
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: ['style-loader', 'css-loader'], // Load CSS
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',  // Handle image assets
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              disable: process.env.NODE_ENV !== 'production', // Disable in non-production mode
              mozjpeg: {
                progressive: true,
                quality: 65,  // Set a specific quality for JPEGs
              },
              optipng: {
                enabled: true,
                optimizationLevel: 7, // Optimize PNGs
              },
              pngquant: {
                quality: [0.6, 0.8],  // Optimize PNGs further
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              svgo: {
                plugins: [
                  { removeViewBox: false },
                  { cleanupIDs: false },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: false,
  },
};
