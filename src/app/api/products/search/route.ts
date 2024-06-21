import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function POST(request: Request){
    try{
        const {
            searchText, categoryFilter, sortBy
        } = await request.json()
        let orderQuery = {}
        if(sortBy === 'relavance'){
            orderQuery = {}
        }else if(sortBy === 'priceLow'){
            orderQuery = {
                  price: 'asc'
              };
        }else if(sortBy === 'priceHigh'){
            orderQuery = {
                    price : 'desc'
            }
        }
        else if(sortBy === 'newest'){
            orderQuery = {
                    createdAt : 'desc',
            }
        }

        


        const datas = await prisma.products.findMany({
            where : {
                name : {
                    contains: searchText,
                    mode : 'insensitive'
                },
                categoryId :{
                    in : categoryFilter
                },
            },
            orderBy: orderQuery
        })


        return Response.json(
        {
            'message' : 'success',
            'data' : datas
        }
    )
    }catch(error:unknown){
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