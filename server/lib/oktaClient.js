const okta = require('@okta/okta-sdk-nodejs')

const client = new okta.Client({
  orgUrl: 'https://dev-310767.okta.com',
  token: '00WUv5Mhv_ScDMJ6WizO52NwwqVSkvQ-geWHhJAZg1'
})

module.exports = client
