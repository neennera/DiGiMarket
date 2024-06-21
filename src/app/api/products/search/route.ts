import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function POST(request: Request){
    try{
        const {
            searchText, categoryFilter, sortBy
        } = await request.json()
        console.log(searchText);
        console.log(categoryFilter);
        console.log(sortBy);
        
        

        const datas = await prisma.products.findMany({
            where : {
                name : {
                    contains: searchText,
                    mode : 'insensitive'
                },
                categoryId :{
                    in : categoryFilter
                }
            }
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