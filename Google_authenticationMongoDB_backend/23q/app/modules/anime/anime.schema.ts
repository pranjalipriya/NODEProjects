import { Document , model } from 'mongoose';
import { BaseSchema } from "../../utility/base.schema";
import { IAnime } from './anime.type';

export const animeSchema = new BaseSchema ({
    name: {
        type: String,
        required: true
    },
    production: {
        type: String,
        required: true
    },
    episodes: {
        type: String,
        required: true
    },
    release:{
    type: String,
    required:true
    },
    genre:{
        type: String,
        required:true
        },
    isDeleted:{
        type:Boolean,
        default: false,
        required:true
    }
});
type IAnimeDocument = Document & IAnime;
export const AnimeModel = model<IAnimeDocument>("Anime" , animeSchema);

export default AnimeModel;