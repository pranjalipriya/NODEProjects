import DummyModel from "./dummy.schema";

const get = () => DummyModel.find();

export default {
    get
}