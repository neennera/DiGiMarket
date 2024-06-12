'use server'

import { SignJWT, importJWK } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(username:string, password:string){
    if(username === "" || password === ""){
        return {"message" : "username and password is require"}
    }
    
    // fetch login API
    if(username!="neen"){
        return {"message":"you not neen!!"}
    }
    // set JWTtoken
    const secretJWK ={
        kty:'oct',
        k:process.env.JOSE_SECRET
    }
    const secretKey = await importJWK(secretJWK, 'HS256')
    const token = await new SignJWT({username})
        .setProtectedHeader({alg:'HS256'})
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secretKey)
    cookies().set('userToken', token);
    redirect('/user')
}