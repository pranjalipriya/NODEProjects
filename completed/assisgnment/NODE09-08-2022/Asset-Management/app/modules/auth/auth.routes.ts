import { Router } from 'express';

const router = Router();

router.post("/signup", (req, res, next) => {
    res.send("SIGN UP SUCCESSFUL");
});

router.post("/login", (req, res, next) => {
    res.send("LOGIN SUCCESSFUL");
});

export default router;
