const passport = require('passport');

module.exports = app => {
    // next two express methods handle OAuth routes
    // user is attempting to authenticate for the first time
    app.get(
        '/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );

    // user is attempting to turn their code into a profile
    app.get('/auth/google/callback', passport.authenticate('google'));

    // when user makes get request to the route /api/logout, log out user
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    // respond with the requested user
    app.get('/api/current_user', (req, res) => {
        res.send(req.user); 
    });
};