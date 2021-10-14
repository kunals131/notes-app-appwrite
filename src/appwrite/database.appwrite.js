import {sdk} from './config.appwrite'

const categoriesOfUser =  (userId)=> {
    // console.log(userId);
    return sdk.database.listDocuments('6166c7e8106b3', [`user=${userId}`]);
}

const createCategory = (data,user) =>{
    return sdk.database.createDocument('6166c7e8106b3',data,['*'], ['*'])
}

const editCategory = (id,data) =>{
    return sdk.database.updateDocument('6166c7e8106b3', id,data);
}


export {categoriesOfUser, createCategory, editCategory};