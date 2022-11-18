import { AnimeResponse } from "./anime.type";



export const ANIME_MESSAGE = {
    NOT_FOUND: new AnimeResponse(404, "ANIME NOT FOUND"),
    ANIME_UPDATED: new AnimeResponse(200, "ANIME UPDATED"),
    ANIME_CREATED: new AnimeResponse(201, "ANIME CREATED"),
    ANIME_DELETED: new AnimeResponse(200, "ANIME DELETED")
}
