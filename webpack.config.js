const path = require('path');

const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');


module.exports = {
  entry: slsw.lib.entries,
  target: 'node16',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  optimization: {
    minimize: !['dev', 'test'].includes(slsw.lib.serverless.variables.options.environment),
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  externals: [nodeExternals()],
};
 
