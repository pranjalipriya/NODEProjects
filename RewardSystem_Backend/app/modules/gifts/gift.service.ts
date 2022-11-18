import giftRepo from "./gift.repo";


const getGifts = async () =>  await giftRepo.get(); 

export default{
    getGifts
}