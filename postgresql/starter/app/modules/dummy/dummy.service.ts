import dummyRepo from "./dummy.repo"


const dummyGet = async () => {
    const dummy = await dummyRepo.get();

    return dummy;
}

export default {
    dummyGet
}