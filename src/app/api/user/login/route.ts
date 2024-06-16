import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function POST(request: Request){
    try{
       const {
            username, password
        } = await request.json()
       
        const loginUser = await prisma.user.findFirst({
            where : {
                username
            }
        })
        if(loginUser == null){
            throw new Error("no account with this username")
        }
        if(password != loginUser.password){
            throw new Error("wrong password")
        }
        return Response.json({
            "message" : "success",
            "data" : loginUser
        })
    } catch (error : Error | unknown){
        let errorMessage = ""
        if(error instanceof Error){
            errorMessage = error.message
        }
        
        return Response.json({
            "message" : "fail",
            "error" : errorMessage
        })
    }
}