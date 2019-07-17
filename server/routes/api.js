const express = require( 'express' ) //install
const router = express.Router()
const request = require('request') //install




//in the end
router.get('/', function (request, response) {
console.log('Someone has come into the server. Brace yourselves.')
response.send('Ending the cycle, thanks for visiting')  
})

module.exports = router