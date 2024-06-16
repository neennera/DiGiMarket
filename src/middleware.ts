import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { jwtVerify, importJWK } from "jose";
import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  try{
    const userToken = request.cookies.get('userToken')
    const url = request.nextUrl;

    const secretJWK ={
        kty:'oct',
        k:process.env.JOSE_SECRET
    }
    
    if (url.pathname === '/login' && userToken != undefined) {
      try {
        const secretKey = await importJWK(secretJWK, 'HS256');
        await jwtVerify(userToken.value, secretKey);
        return NextResponse.redirect(new URL("/", request.url));
      } catch (error) {
        return NextResponse.next();
      }
    }
    
    if(userToken === undefined){
      throw new Error("user not login")
    }

    const secretKey = await importJWK(secretJWK, 'HS256')
    const {payload} = await jwtVerify(userToken.value, secretKey)
    
    const requestHeader = new Headers(request.headers)
    requestHeader.set('userId', JSON.stringify({userId : payload.userId}))
    const response = NextResponse.next({
      request : {
        headers : requestHeader,
      }
    })
    return response
  }catch(error){
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/user/:path*", "/cart/:path*", "/login"],
};
