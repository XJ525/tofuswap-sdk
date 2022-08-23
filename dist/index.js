
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./tofuswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./tofuswap-sdk.cjs.development.js')
}
