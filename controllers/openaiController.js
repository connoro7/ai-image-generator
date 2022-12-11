const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

// // Test route to check if the server is running
// const generateimage = async (req, res) => {
//   res.status(200).json({ success: true })
// }

const generateImage = async (req, res) => {
  const { prompt, size } = req.body
  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size,
    })

    const imageUrl = response.data.data[0].url

    res.status(200).json({
      success: true,
      data: imageUrl,
    })
  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }
    res.status(400).json({
      success: false,
      error: 'The image could not be generated at openaiController.js/generateImage()',
    })
  }
}
module.exports = { generateImage }
