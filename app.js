var express = require('express')
var expressHandlebars = require('express-handlebars')

var app = express()

app.engine('handlebars', expressHandlebars());
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => console.log('Serve start on port 3000'))