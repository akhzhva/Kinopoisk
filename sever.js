const express = require('express')
const session = require('express-session')
const mongooseStore = require('connect-mongo')
const passport = require('passport')

const app = express()

require('./server/config/db.js')
require('./server/config/passport.js')

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded())
app.use(express.json())
app.use(session({
    name: 'kinopoisk.session',
    secret: 'keyboard cat',
    maxAge: 1000 * 60 * 60 * 7,
    resave: false,
    store: mongooseStore.create({
        mongoUrl: 'mongodb://localhost:27017'
    })
}))
app.use(passport.initialize())
app.use(passport.session())


app.set("view engine", "ejs");
app.use(require('./server/pages/router.js'));
app.use(require("./server/Genres/router.js"));
app.use(require("./server/Country/router"));
app.use(require("./server/auth/router"));
app.use(require("./server/Films/router"));
app.use(require("./server/Rates/router"));


const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
