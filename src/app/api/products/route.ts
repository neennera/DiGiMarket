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
            name, price, description
        } = await request.json()
        const priceFloat = Number(price)        
       
        const newProduct = await prisma.products.create({
            data : {
                name, price : priceFloat, description
            }
        }) 
        return Response.json({
            "message" : "success",
            "data" : newProduct
        })
    } catch (error : unknown){
        return Response.json({
            "message" : "fail",
            "error" : error
        })
    }
}