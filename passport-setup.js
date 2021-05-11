const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
    done(null, user); 
   // where is this user.profile going? Are we supposed to access this anywhere?
});

// used to deserialize the user
passport.deserializeUser(function(user, done) {
        done(null, user);
    
});

passport.use(new GoogleStrategy({
    clientID: '765044367179-mr9i2r2nlkhvs60j1j5r2h9qgbco5eor.apps.googleusercontent.com',
    clientSecret: 'CWZmm2N-QnYsu5m_iHzQ8qfO',
    callbackURL: "http://localhost:3000/google/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        return done(null, profile);
    } 
));