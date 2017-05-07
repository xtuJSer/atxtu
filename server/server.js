const path = require('path')
const express = require('express')
const app = express()

const isDev = process.env.NODE_ENV === 'dev'
const rootSrc = isDev
  ? path.join(__dirname, '../dist')
  : path.join(__dirname, '..')

app.use(express.static(rootSrc))

const port = process.env.PORT || 8800
app.listen(port, () => {
  console.log('Server is running at port ' + port + '...')
})
