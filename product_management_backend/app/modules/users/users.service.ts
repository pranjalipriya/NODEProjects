import { createPassword } from "../../utility/password";
import { ICredentials } from "../auth/auth.types";
import customerService from "../customer/customer.service";
import { ICustomer } from "../customer/customer.type";
import hsnService from "../HSN/hsn.service";
import { IHSN } from "../HSN/hsn.type";
import materialService from "../material/material.service";
import { IMaterial } from "../material/material.type";
import orderService from "../order/order.service";
import { IOrder } from "../order/order.type";
import { ROLES } from "../roles/roles.constants";
import storageService from "../storage/storage.service";
import { IStorage } from "../storage/storage.type";
import userRepo from "./users.repo";
import { IUser } from "./users.types";



//users
const getUser = async (credentials: ICredentials) => {
    try {
        return await userRepo.get(credentials);
    }
    catch (e) {
        throw e;
    }
}
const getUSER = async (username: string) => {
    try {
        return await userRepo.getUser(username);
    }
    catch (e) {
        throw e
    }
}
const emailget = async (email: string) => {
    try {
        return await userRepo.eUser(email);
    }
    catch (e) {
        throw e
    }
}
const create = async (user: IUser) => {
    try {

        user.username = user.email.split("@")[0] + Math.floor(Math.random() * 100);
        const { password, hashedPassword } = await createPassword();
        user.password = hashedPassword;
        user.role = ROLES[user.role];
        const result = await userRepo.create(user);
        return password;
    }
    catch (e) {
        throw e
    }
}


const getUsers = async () => {
    try {
        const user = await userRepo.getUsers();

        if (user) {
            return user;
        }

    } catch (e) {
        throw e
    }
}
const updateUser = async (updated: Object) => {
    try {
        return await userRepo.updatedUser(updated)
    }
    catch (e) {
        throw e
    }
}

const deleteUser = async (id: string) => {
    try {
        return await userRepo.deleteUser(id)
    }
    catch (e) {
        throw e
    }
}

//hsn
// const getHSN = async () => {
//     try {
//         return await hsnService.getHsn();
//     } catch (e) {
//         throw e;
//     }
// }

// const createHsn = async (hsn: IHSN) => {
//     try {
//         return await hsnService.create(hsn);
//     } catch (e) {
//         throw e
//     }
// }

// const updateHsn = async (updated: Object) => {
//     try {
//         return await hsnService.update(updated)
//     } catch (e) {
//         throw e
//     }
// }

// const deleteHsn = async (id: string) => {
//     try {
//         return await hsnService.deleted(id)
//     } catch (e) {
//         throw e
//     }
// }

// //customer
// const getCustomer = async () => {
//     try {
//         return await customerService.get();
//     } catch (e) {
//         throw e
//     }
// }

// const createCustomer = async (customer: ICustomer) => {
//     try {
//         return await customerService.create(customer);
//     } catch (e) {
//         throw e
//     }
// }

// const updateCustomer = async (updated: Object) => {
//     try {
//         return await customerService.update(updated)
//     }
//     catch (e) {
//         throw e
//     }
// }
// const deleteCustomer = async (id: string) => {
//     try {
//         return await customerService.deleted(id)
//     }
//     catch (e) { throw e }
// }



// //material
// const getMaterial = async () => {
//     try {
//         return await materialService.get();
//     }
//     catch (e) {
//         throw e
//     }
// }

// const createMaterial = async (material: IMaterial) => {
//     try {


//         return await materialService.create(material);
//     } catch (e) {
//         throw e
//     }
// }

// const updateMaterial = async (updated: Object) => {
//     try {
//         return await materialService.update(updated)
//     } catch (e) {
//         throw e
//     }
// }

// const deleteMaterial = async (id: string) => {
//     try {
//         return await materialService.deleted(id)
//     } catch (e) {
//         throw e
//     }
// }

// //storage
// const getStorage = async () => {
//     try {
//         return await storageService.get();
//     }
//     catch (e) {
//         throw e
//     }
// }

// const createStorage = async (storage: IStorage) => {
//     try {

//         return await storageService.create(storage);
//     }
//     catch (e) {
//         throw e
//     }
// }

// const updateStorage = async (updated: Object) => {
//     try {
//         return await storageService.update(updated)
//     } catch (e) {
//         throw e
//     }
// }

// const deleteStorage = async (id: string) => {
//     try {

//         return await storageService.deleted(id)
//     } catch (e) {
//         throw e
//     }
// }

// //order
// const getOrder = async () => {
//     try {
//         return await orderService.get();
//     } catch (e) {
//         throw e
//     }
// }

// const createOrder = async (order: IOrder) => {
//     try {
//         return await orderService.create(order);
//     } catch (e) {
//         throw e
//     }
// }

// const updateOrder = async (updated: Object) => {
//     try {
//         return await orderService.update(updated)
//     } catch (e) {
//         throw e
//     }
// }

// const deleteOrder = async (id: string) => {
//     try {
//         return await orderService.deleted(id)
//     } catch (e) {
//         throw e
//     }
// }




export default {
    getUsers,
    getUSER,
    getUser,
    create,
    updateUser,
    deleteUser,
    emailget
}