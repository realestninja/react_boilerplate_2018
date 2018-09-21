import { resolve } from 'path';

const abs = (child = '') => resolve(__dirname, './', child);

const config = {
  context: abs('src'),

  entry: {
    bundle: './bundle.ts',
  },

  output: {
    filename: '[name].js',
  },

  externals: {
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'source-map-loader',
        enforce: 'pre',
      },
    ],
  },

  devtool: 'source-map',

  resolve: {
    modules: ['node_modules'],
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.ts', '.tsx'],
    alias: {},
  },

  devServer: {
    disableHostCheck: true,
    contentBase: abs(),
    hot: false,
    inline: false,
  },

  node: {
    fs: 'empty',
  },
};

export default config;
