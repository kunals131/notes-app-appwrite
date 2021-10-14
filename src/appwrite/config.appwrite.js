import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('616692469ed53') // Your project ID
;


const loginUser = (email,password)=> {
    return sdk.account.createSession(email,password);
}





const currentUser = () =>{
    return sdk.account.get();
}


const logoutUser = () =>{
    return sdk.account.deleteSession('current');

}
export {sdk,loginUser, currentUser, logoutUser}
