import { importJWK, jwtVerify } from "jose";
import Cookies from "js-cookie";
import axios from "axios";
export async function getUserId()  {
    const userToken = Cookies.get("userToken");
    
    const secretJWK ={
        kty:'oct',
        k:process.env.NEXT_PUBLIC_JOSE_SECRET
    }

    try{
        const secretKey = await importJWK(secretJWK, 'HS256')
        const {payload} = await jwtVerify(userToken || "", secretKey)    
        return String(payload.userId)
    } catch (error:unknown){
        return "-1"
    }
    
}