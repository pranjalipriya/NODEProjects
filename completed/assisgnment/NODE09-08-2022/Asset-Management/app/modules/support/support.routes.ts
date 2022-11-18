import { Router } from 'express';

const router = Router();

router.post("/generateticket", (req, res, next) => {
    res.send("Ticket created Successfully");
});


export default router;
