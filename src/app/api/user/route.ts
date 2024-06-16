import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET(){
    const datas = await prisma.user.findMany()
    return Response.json(
        {
            'message' : 'success',
            'data' : datas
        }
    )
}

export async function POST(request: Request){
    try{
       const {
            username, password
        } = await request.json()
       
        const newUser = await prisma.user.create({
            data : {
                username, password
            }
        }) 
        return Response.json({
            "message" : "successfully create new user",
            "data" : newUser
        })
    } catch (error : unknown){
        return Response.json({
            "message" : "fail",
            "error" : error
        })
    }
}