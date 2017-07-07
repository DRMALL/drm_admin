
const express = require('express')
    , cors = require('cors')
    , app = express()
    , path = require('path')
    , port = 3456

app.use(express.static('./build'))
app.use(cors())

app.get('*', ( req, res, next ) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'))
})

app.listen(port, () => console.info(`running on port: ${port}`) )
