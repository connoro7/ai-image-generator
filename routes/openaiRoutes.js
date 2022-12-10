const express = require('express')
const { generateimage } = require('../controllers/openaiController')
const router = express.Router()

// // Test route to check if the server is running
// router.post('/generateimage', (req, res) => {
//   res.status(200).json({ success: true })
// })

router.post('/generateimage', generateimage)

module.exports = router
