import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET(request: Request,  { params }: { params: { id: string } }){   
    try {
        const id = Number(params.id)  
        const datas = await prisma.products.findUnique({
            where :{
                id
            }
        })
        if(datas === null){
            throw new Error("no product's name in database");
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
        const id = Number(params.id)    
        const {
            name, price, description
        } = await request.json()
        const priceFloat = Number(price)    

        const datas = await prisma.products.update({
            where :{ id },
            data : {
                name, price:priceFloat , description
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
        const id = Number(params.id)  
        const datas = await prisma.products.delete({
            where :{
                id
            }
        })
        return Response.json(
            {
                'message' : 'success'
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