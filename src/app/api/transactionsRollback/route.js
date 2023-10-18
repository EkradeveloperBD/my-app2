import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST (req,res){
    try{
      const prisma = new PrismaClient();

        const createUser = prisma.users.create({
            data:{email:"ekramul@gmail.com", password:"123"}
        })

        const deleteComment=prisma.Comment.delete({
            where:{id:5}
        })

        const result=await prisma.$transaction([createUser, deleteComment])
     
    return NextResponse.json({status: "success", data: result});

  } catch (error) {
    console.error("Error creating employee:", error);
    return NextResponse.json({ status: "fail", data: "An error occurred while creating the employee." }, { status: 500 });
  }
}

