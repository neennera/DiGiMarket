import { importJWK, jwtVerify } from "jose";
import Cookies from "js-cookie";
import axios from "axios";
export async function getUserId() {
    const userToken = Cookies.get("userToken");
    
    const secretJWK ={
        kty:'oct',
        k:process.env.NEXT_PUBLIC_JOSE_SECRET
    }

    const secretKey = await importJWK(secretJWK, 'HS256')
    const {payload} = await jwtVerify(userToken, secretKey)    
    return payload.userId
}

export async function getUserData() {
    const userId = getUserId()
    const response = await axios.get(`/api/user/${userId}`)
    console.log(response);
    
    return response.data.data
}