import { Router } from "express";
import multer from "multer";
import { permit } from "../../utility/authorize";
import { ROLES } from "../roles/roles.constants";
import { READING_MESSAGE } from "./reading.constants";
import readingService from "./reading.service";
import { readingValidator } from "./reading.validatio";



export const ReadingRouter=Router();

ReadingRouter.get("/:pagenumber/:pagelimit", permit([ROLES.admin, ROLES.clerk]), async (req, res, next) => {
    try {
        const filterParameter=req.query;
        const pagenumber=parseInt(req.params.pagenumber);
        const pagelimit=parseInt(req.params.pagelimit);
        const result = await readingService.get(pagenumber,pagelimit,filterParameter);
        res.send(result);
    }
    catch (e) {
        next(e);
    }
});

ReadingRouter.post("/",readingValidator, permit([ROLES.admin]), async (req:any, res:any, next:any) => {
    try {
        const meter = req.body;
        const result = await readingService.create(meter)
        res.send(READING_MESSAGE.READING_CREATED);
    }
    catch (e) {
        next(e)
    }
})
ReadingRouter.put("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const customer = req.body;
        const {id}=req.params;
        const result = await readingService.update(customer,id);
        res.send(READING_MESSAGE.READING_UPDATED);
    }
    catch (e) {
        next(e)
    }
})

ReadingRouter.delete("/:id", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const { id } = req.params;
        await readingService.deleted(id)
        res.send(READING_MESSAGE.READING_DELETED)
    }
    catch (e) {
        next(e)
    }
})


ReadingRouter.get("/", permit([ROLES.admin]), async (req, res, next) => {
    try {
        const result = await readingService.getAll();
        res.send(result);
    }
    catch (e) {
        next(e);
    }
});


// var upload = multer();

// ReadingRouter.post('/upload', upload.array('uploadedImages', 10), function(req, res) {
//   var file = req.files;
//   res.end();
// });