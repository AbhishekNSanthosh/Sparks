const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
	new GoogleStrategy(
		{
			clientID: "735550759625-sqe44j7emefvfg4jf8v21pdrdconuldq.apps.googleusercontent.com",
			clientSecret: "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",
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
