import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET(){
    const datas = await prisma.products.findMany()
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
            name, price, description, userId, categoryId
        } = await request.json()
        const priceFloat = Number(price)  
        
        // check user account        
        const userOwner = await prisma.user.findUnique({where : {id: Number(userId)}, include:{Products:true}})
        if(userOwner == null){
            throw new Error("no user account with this userId")
        }
        if(userOwner.role != "shop"){
            throw new Error("user is not regiuster as shop")
        }       
        if(userOwner.Products.length >= 2){
            throw new Error("User can only create two item")
        }

        // handle category in create
        const catCheck = await prisma.itemCategory.findUnique({
            where: {
              id:Number(categoryId)
            }
          });
        
        if(catCheck == null){
            throw new Error("no category")
        }
       
        const newProduct = await prisma.products.create({
            data : {
                name, price : priceFloat, description, userId: Number(userId), categoryId : Number(categoryId)
            }
        }) 
        return Response.json({
            "message" : "success",
            "data" : newProduct
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