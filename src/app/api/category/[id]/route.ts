import { PrismaClient } from "@prisma/client"
import { Erica_One } from "next/font/google"
const prisma = new PrismaClient()

export async function PUT(request: Request,  { params }: { params: { id: string } }){
    try{
        const id = params.id  

       const {
            itemCategory, color
        } = await request.json()
        let data ;
    
    if(itemCategory == undefined || itemCategory == null){
        data = await prisma.itemCategory.update({where :{ id},
        data : {
            color
        }})
    }
    else if(color == undefined || color == null){
        data = await prisma.itemCategory.update({where :{ id},
        data : {
            itemCategory
        }})
    }else{
        data = await prisma.itemCategory.update({where :{ id},
        data : {
            itemCategory, color
        }})
    }
    
    return Response.json(
        {
            'message' : 'success',
            'data' : data
        }
    ) 
    }catch(error:unknown){
        return Response.json(
            {
                'message' : 'fail',
                'error' : error
            }
        )
    }
}

export async function DELETE(request: Request){
    try{
       const {
        itemCategory
    } = await request.json()
    const datas = await prisma.itemCategory.findFirst({
        where : {
            itemCategory
        }
    })
    if(datas == null){
        throw new Error("No category in database")
    }
    await prisma.itemCategory.delete({
        where : {
            id: datas.id
        }
    })
    return Response.json(
        {
            'message' : 'success',
            'data' : datas
        }
    ) 
    }catch(error:unknown){
        return Response.json(
            {
                'message' : 'fail',
                'error' : error
            }
        )
    }
}