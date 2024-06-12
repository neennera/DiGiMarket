'use server'
export async function login(username:string, password:string){
    console.log(username, password);
    if(username === "" || password === ""){
        return {"message" : "username and password is require"}
    }
    if(username!="neen"){
        return {"message":"you not neen!!"}
    }
    return {"message" : "success"}
}