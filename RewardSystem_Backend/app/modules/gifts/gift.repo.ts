import GiftModel from "./gifts.schema";

const get=()=> GiftModel.find({});

export default{
    get
}