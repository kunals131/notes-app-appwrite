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

const getAllNotes = (userId) =>{
    return sdk.database.listDocuments('6166c81843a9e',[`user=${userId}`])
}

const createNote = (data)=>{
    return sdk.database.createDocument('6166c81843a9e',data,['*'], ['*'])
}

const editNote = (id,data)=>{
    return sdk.database.updateDocument('6166c81843a9e',id,data)
}

const getNotesViaCategory = (userId, categoryId) =>{
    return sdk.database.listDocuments('6166c81843a9e',[`user=${userId}`, `category=${categoryId}`])
}

export const deleteNote = (id)=>{
    return sdk.database.deleteDocument('6166c81843a9e', id);
}

export const deleteCategory = (id)=>{
    return sdk.database.deleteDocument('6166c7e8106b3',id);
}

export {categoriesOfUser, createCategory, editCategory, getAllNotes, getNotesViaCategory,createNote, editNote};