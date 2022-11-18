import passport from "passport";

export const passPort = () => {
    passport.initialize();
    passport.session();
    passport.serializeUser(function (user, cb) {
        cb(null, user);
    });
    passport.deserializeUser(function (obj: any, cb) {
        cb(null, obj);
    });
};
export const googleAuthentication = passport.authenticate("google", { scope: ["profile", "email"] });
export const googleAuthorization = passport.authenticate("google", { failureRedirect: "/auth/error", successRedirect:'/auth/success' });