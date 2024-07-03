import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET(request: Request,  { params }: { params: { id: string } }){   
    try {
        const id = params.id
        const datas = await prisma.user.findUnique({
            where :{
                id
            }
        })
        if(datas === null){
            throw new Error("no account with this username in database");
        }
        return Response.json(
            {
                'message' : 'success',
                'data' : datas
            }
        )
        }
    catch(error:unknown){
        return Response.json({
            "message" : "fail",
            "error" : error
        })
    }
}

export async function PUT(request: Request,  { params }: { params: { id: string } }){   
    try {
        const id = params.id  
        const {
            username, password
        } = await request.json()

        const datas = await prisma.user.update({
            where :{ id },
            data : {
                username, password
            }
        })
        return Response.json(
            {
                'message' : 'success',
                'data' : datas
            }
        )
        }
    catch(error:unknown){
        return Response.json({
            "message" : "fail",
            "error" : error
        })
    }
}

export async function DELETE(request: Request,  { params }: { params: { id: string } }){   
    try {
        const id = params.id
        const datas = await prisma.user.delete({
            where :{
                id
            }
        })
        return Response.json(
            {
                'message' : 'successfully delete user account'
            }
        )
        }
    catch(error:unknown){
        return Response.json({
            "message" : "fail",
            "error" : error
        })
    }
}