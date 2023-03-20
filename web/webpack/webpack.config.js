const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const dotenv = require('dotenv')
dotenv.config();

module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
