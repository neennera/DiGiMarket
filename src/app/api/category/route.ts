import { PrismaClient } from "@prisma/client"
import { Erica_One } from "next/font/google"
const prisma = new PrismaClient()

export async function GET(){
    const datas = await prisma.itemCategory.findMany()
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
        itemCategory
    } = await request.json()
    const datas = await prisma.itemCategory.create({
        data : {
            itemCategory
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

export async function PUT(request: Request){
    try{
       const {
        oldId, newId, itemCategory
    } = await request.json()
    
    const data = await prisma.itemCategory.update({where :{ id: oldId },
        data : {
            id:newId, itemCategory
        }})
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