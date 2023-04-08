const express = require('express');
const passport = require('passport');
// GoogleStrategy instructs athentication with Google
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

const app = express();

app.get('/', (req, res) => {
    console.log({
        hello: "there"
    });
});
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
    }, (accessToken) => {
        console.log(accessToken)
    })
);
const PORT = process.env.PORT || 5000;
app.listen(5000);