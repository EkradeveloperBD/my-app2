import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function POST (req,res){
    try{
      const result = await prisma.products.aggregate({
        _avg: { price: true },
        _count: { price: true },
        _max: { price: true },
        _min: { price: true },
        _sum: { price: true },
  });
     
    return NextResponse.json({status: "success", data: result});

  } catch (error) {
    console.error("Error creating employee:", error);
    return NextResponse.json({ status: "fail", data: "An error occurred while creating the employee." }, { status: 500 });
  }
}


export async function POST (req,res){
    try{
        const result = await prisma.order.groupBy({
            by:["city"],
            _sum: { tax: true },
            having : {city:"Dhaka"}
            
      });
     
    return NextResponse.json({status: "success", data: result});

  } catch (error) {
    console.error("Error creating employee:", error);
    return NextResponse.json({ status: "fail", data: "An error occurred while creating the employee." }, { status: 500 });
  }
}

export async function POST (req,res){
    try{
        const result = await prisma.users.groupBy({
            by: ['country'],
            where: {
              email: {
                contains: 'ekramul@gmail.com',
              },
            },
            _sum: {
                product_review: true,
            },
            having: {
                product_review: {
                _avg: {
                  gt: 100,
                },
              },
            },
            
      });
     
    return NextResponse.json({status: "success", data: result});

  } catch (error) {
    console.error("Error creating employee:", error);
    return NextResponse.json({ status: "fail", data: "An error occurred while creating the employee." }, { status: 500 });
  }
}