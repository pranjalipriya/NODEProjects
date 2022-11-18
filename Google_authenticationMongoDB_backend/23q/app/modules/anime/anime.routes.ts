import { Router } from "express";
import { ResponseHandler, ResponseHandler as Responses } from "../../utility/response-handler";
import { animeValidator } from "./anime.validation";
import { ANIME_MESSAGE } from "./anime.constants";
import animeService from "./anime.service";



export const AnimeRouter=Router();

// AnimeRouter.get("/:pagenumber/:pagelimit/:filterParameter",  async (req, res, next) => {
//     try {
//         const filterParameter=req.params.filterParameter;
//         const pagenumber=parseInt(req.params.pagenumber);
//         const pagelimit=parseInt(req.params.pagelimit);
//         const result = await animeService.get(pagenumber,pagelimit,filterParameter);
//         res.send(result);
//     }
//     catch (e) {
//         next(e);
//     }
// });

AnimeRouter.get("/:pagenumber/:pagelimit",  async (req, res, next) => {
    try {
        const filterParameter=req.query;
        const sort=req.query;
        const pagenumber=parseInt(req.params.pagenumber);
        const pagelimit=parseInt(req.params.pagelimit);
        const result = await animeService.getpage(pagenumber,pagelimit,filterParameter,sort);
        res.send(result);
    }
    catch (e) {
        next(e);
    }
});

AnimeRouter.post("/",animeValidator,  async (req:any, res:any, next:any) => {
    try {
        const anime = req.body;
        const result = await animeService.create(anime)
        res.send(ANIME_MESSAGE.ANIME_CREATED);
    }
    catch (e) {
        next(e)
    }
})
// AnimeRouter.put("/:id",  async (req, res, next) => {
//     try {
//         const customer = req.body;
//         const {id}=req.params;
//         const result = await animeService.update(customer,id);
//         res.send(ANIME_MESSAGE.ANIME_UPDATED);
//     }
//     catch (e) {
//         next(e)
//     }
// })

// AnimeRouter.delete("/:id", async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         await animeService.deleted(id)
//         res.send(ANIME_MESSAGE.ANIME_DELETED)
//     }
//     catch (e) {
//         next(e)
//     }
// })

// AnimeRouter.get("/report",  async (req, res, next) => {
//     try {
//         const filterParameter=req.query;
//         const result = await animeService.report(filterParameter);
//         res.send(new ResponseHandler(  result));
//     }
//     catch (e) {
//         next(e);
//     }
// });



