import { Router } from 'express';
import {v4} from 'uuid';

const router = Router();

type AssetType='monitor'|'keyboard'|'mouse'|'charger'|'laptop'|'headphone';
interface IAsset {
    id: string;
    name:AssetType;
    serialId:string;
    assignedTo:string;
}

const assets: IAsset[] = [];

router.post("/asset", (req, res, next) => {
    const asset = req.body as IAsset;
    assets.push({...asset, id: v4()});
    res.send("ASSET CREATED");
});

router.get("/asset", (req, res, next) => {
    res.send(assets);
});
router.put("/asset", (req, res, next) => {

    res.send("ASSET UPDATED");
});

router.delete("/asset", (req, res, next) => {

    res.send("ASSET DELETED");
});

export default router;