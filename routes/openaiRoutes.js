const express = require('express')
const { generateImage } = require('../controllers/openaiController')
const router = express.Router()

// // Test route to check if the server is running
// router.post('/generateImage', (req, res) => {
//   res.status(200).json({ success: true })
// })

router.post('/generateimage', generateImage)

module.exports = router
