import {sdk} from './config.appwrite'

const categoriesOfUser =  (userId)=> {
    // console.log(userId);
    return sdk.database.listDocuments('6166c7e8106b3', [`user=${userId}`]);
}

export {categoriesOfUser};