const express = require('express')
const CONSTANTS = require('../constants')
const sampleData = require('../sampleData')

const request = require('superagent')

const router = express.Router()
// MasterDetail Page Endpoint
router.get(CONSTANTS.ENDPOINT.MASTERDETAIL, (req, res) => {
  res.json(sampleData.textAssets)
})

router.get("/shoope", (req, res) => {
  // https://shopee.co.id/api/v2/shop/get?username=batamgrosir.id
  request
    // .post('/api/pet')
    .get('https://shopee.co.id/api/v2/shop/get?username=batamgrosir.id')
    .send({ name: 'Manny', species: 'cat' })
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .then(res => {
      console.log('yay got ' + JSON.stringify(res.body));
    });
})

// Grid Page Endpoint
router.get(CONSTANTS.ENDPOINT.GRID, (req, res) => {
  res.json(sampleData.textAssets)
})


module.exports = router
