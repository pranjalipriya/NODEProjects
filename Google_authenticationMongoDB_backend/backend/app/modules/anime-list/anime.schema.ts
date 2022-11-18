import { Document , model } from 'mongoose';
import { BaseSchema } from '../../utility/base.schema';
import { IAnime } from './anime.types';


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
        type: Number,
        required: true
    },
    release:{
    type: Number,
    required:true
    },
    genre:{
        type: String,
        required:true
        }
});
type IAnimeDocument = Document & IAnime;
export const AnimeModel = model<IAnimeDocument>("Anime" , animeSchema);

export default AnimeModel;