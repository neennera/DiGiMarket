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
            name, price, description, userId, categoryId
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
        console.log(categoryId);
        const catCheck = await prisma.itemCategory.findUnique({
            where: {
              id:Number(categoryId)
            }
          });
        console.log(catCheck);
        
        if(catCheck == null){
            throw new Error("no category")
        }
        
        
        
        
        await prisma.products.update({
            where :{ id },
            data : {
                name, price:priceFloat , description, categoryId : Number(categoryId)
            }
        })
        return Response.json(
            {
                'message' : 'success'
            }
        )
        }
    catch(error:unknown){
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
                'message' : 'success'
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