const express = repuire('express')
const app = expres()

app.set('views', `${__dirname}/dist/`)
app.engine( 'html', require('ejs').renderFile)
app.set('view engine', 'html')

app.use('/', express.static(root `${__dirname}/dist/`))
