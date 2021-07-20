const express = require('express')
const serveIndex = require('serve-index')
const port = process.env.PORT || 4000; 
const app = express()

app.use(
  '/',
  express.static('Served-Dir'),
  serveIndex('Served-Dir', { icons: true })
)

app.listen(port, () => console.log(
	`Server is Running on http://localhost:${port}/`
))