'use server'

import axios from "axios";
import { SignJWT, importJWK } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signin(username:string, password:string){
    if(username === "" || password === ""){
        return {"message" : "username and password is require"}
    }
    
    // fetch login API    
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user`,{
        username, password
    })

    if(response.data.message == "fail"){
        return {"message" : response.data.error}
    }

    const response2 = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/user/login`,{
        username, password
    })

    if(response.data.message == "fail"){
        return {"message" : response.data.error}
    }
    const userId = response.data.data.id

    // set JWTtoken
    const secretJWK ={
        kty:'oct',
        k:process.env.JOSE_SECRET
    }
    const secretKey = await importJWK(secretJWK, 'HS256')
    const token = await new SignJWT({userId})
        .setProtectedHeader({alg:'HS256'})
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(secretKey)
    cookies().set('userToken', token);
    redirect('/user')

}