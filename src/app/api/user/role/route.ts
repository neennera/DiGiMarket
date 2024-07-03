import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function POST(request: Request){
    try{
       const {
            userId, role
        } = await request.json()
       
        const newUser = await prisma.user.update({
            where : {
                id: userId
            },
            data : {
                role
            }
        }) 
        return Response.json({
            "message" : "success",
            "data" : newUser
        })
    } catch (error : unknown){
        return Response.json({
            "message" : "fail",
            "error" : error
        })
    }
}