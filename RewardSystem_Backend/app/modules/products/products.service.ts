import productsRepo from "./products.repo";

const get=async (name:string) =>  await productsRepo.get(name);

export default{
    get
}