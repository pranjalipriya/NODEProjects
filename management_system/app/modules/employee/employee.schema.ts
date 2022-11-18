import { employees } from "./employee.type";


class employeesSchema {
    assets: employees[] = [];

    create(asset: employees) {
        this.assets.push({ ...employee});

         return true;
    }

    get() {
        return this.employee;
    }

    getOne(id: string) {
        const asset = this.employee.find(x => x.id === id);

        return asset;
    }

    update(asset: employees) {
        const assetIndex = this.employee.findIndex(a => a.id === asset.id);

        if (assetIndex !== -1) {
            this.assets[assetIndex] = asset;
            return true;
        }

        return false;

    }

    deleteOne(id: string) {
        const assetIndex = this.assets.findIndex(a => a.id === id);

        if (assetIndex !== -1) {
            this.assets.splice(assetIndex, 1);
            return true;
        }

        return false;
    }
}

const assetSchema = new AssetSchema();

export default assetSchema;

