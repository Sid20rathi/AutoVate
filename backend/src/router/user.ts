import { Request, Router } from "express";
import { authMiddleware } from "../middleware";
import { SignupSchema,SigninSchema } from "../types/index"
import { prismaClient } from "../db";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";
import { any } from "zod";

const router  = Router();

router.post("/signup", async (req: any, res: any) => {
    try {
        const body = req.body;
        const parsedData = SignupSchema.safeParse(body);

        if (!parsedData.success) {
            console.log(parsedData.error);
            return res.status(411).json({
                message: "Incorrect inputs"
            });
        }

        const userExists = await prismaClient.user.findFirst({
            where: {
                email: parsedData.data.username
            }
        });

        if (userExists) {
            return res.status(403).json({
                message: "User already exists"
            });
        }

        await prismaClient.user.create({
            data: {
                email: parsedData.data.username,
                password: parsedData.data.password,
                name: parsedData.data.name
            }
        });

        return res.json({
            message: "Please verify your account by checking your email"
        });

    } catch (error) {
        console.error("Error in signup route:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
});

router.post("/signin", async (req:any, res:any) => {
    const body = req.body;
    const parsedData = SigninSchema.safeParse(body);

    if (!parsedData.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username,
            password: parsedData.data.password
        }
    });
    
    if (!user) {
        return res.status(403).json({
            message: "Sorry credentials are incorrect"
        })
    }

    const token = jwt.sign({
        id: user.id
    }, JWT_PASSWORD);

    res.json({
        token: token,
    });
})


router.post("/",authMiddleware ,async( req :any,res:any)=>{
    //@ts-ignore
    const id = req.id;
    const user = await prismaClient.user.findFirst({
        where:{
            id
        },
        select:{
            name :true,
            email: true
        }
    })

    return res.json({
        user
    })

});


export const userRouter = router;