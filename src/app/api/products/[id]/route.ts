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
            name, price, description, userId, category
        } = await request.json()
        const priceFloat = Number(price)    

        const itemData = await prisma.products.findUnique({
            where :{ id },
        })

        if(itemData == null){
            throw new Error("no item with this item name")
        }

        if(itemData.userId != userId){
            throw new Error("this item is not belong to this user")
        }

        // [todo] : handle category in update

        await prisma.products.update({
            where :{ id },
            data : {
                name, price:priceFloat , description
            }
        })
        return Response.json(
            {
                'message' : 'success',
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
        const {
            userId
        } = await request.json()
        const itemData = await prisma.products.findUnique({
            where :{ id },
        })

        if(itemData == null){
            throw new Error("no item with this item name")
        }

        if(itemData.userId != userId){
            throw new Error("this item is not belong to this user")
        }

        const datas = await prisma.products.delete({
            where :{
                id
            }
        })
        return Response.json(
            {
                'message' : 'success delete'
            }
        )
    }
    catch (error : Error | unknown){
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