const express = require("express");
const passport = require('passport');
const router = express.Router();
const { signUp, signIn, singOut } = require("./controller");
const createAdmin = require('../Admin/seed')

router.post("/api/signup", signUp);
router.post("/api/signin",passport.authenticate("local", { failureRefirect: "/login?error=1" }), signIn);
router.get("/api/singout", singOut)
router.get("/api/auth/google", passport.authenticate('google'), (req, res) => {
    res.redirect('/profile/' + req.user._id)
})
createAdmin()
module.exports = router;
