import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*",async (c, next) =>{
    try {
        const authHeader = c.req.header("Authorization");
        if(!authHeader){
            return c.json({
                msg: "unauthorized"
            })
        }
        const token = authHeader;
        const user = await verify(token, c.env.JWT_SECRET);
        if(!user){
            c.status(403);
            return c.json({
                msg: "You are not logged in"
            })
        }
        c.set("userId", user.id);
        await next();
    } catch (error) {
        console.log(error);
        
        c.status(403);
        return c.json({
            msg: "You are not logged in here"
        })
    }
})

blogRouter.post("/", async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const body = await c.req.json();
        const authId = c.get("userId");
        const response = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authId
            }
        })
        return c.json({
            id: response.id
        })
    } catch (error) {
        console.log(error);
        return c.json({
            msg: "error while posting blog"
        })     
    }
})

blogRouter.put("/", async(c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const body = await c.req.json();
        const response = await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content
            }
        })
        return c.json({
            id: response.id
        })
    } catch (error) {
        console.log(error);
        return c.json({
            msg: "error while updating blog"
        })     
    }
})

blogRouter.get("/post/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const postId = c.req.param("id");
        const response = await prisma.post.findFirst({
            where: {
                id: postId
            },
            select: {
                id: true,
                title: true,
                content: true,
                created_at: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({
            response
        })
    } catch (error) {
        c.status(411);
        console.log(error);
        return c.json({
            msg: "error while fetching blog"
        })     
    }
})

blogRouter.get("/bulk", async(c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const response = await prisma.post.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                created_at: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });
        return c.json({
            response
        })
    } catch (error) {
        console.log(error);
        return c.json({
            msg: "error while fetching all the blogs"
        })     
    }
})

blogRouter.delete("/post/:id", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const postId = c.req.param("id");
        const postInfo = await prisma.post.findUnique({
            where: {
                id: postId
            },
            include: {
                author: true
            }
        })
        if(!postInfo){
            c.status(404);
            return c.json({
                msg: 'post not found'
            })
        }
        // perform both operation:
        await prisma.post.delete({
            where: {
                id: postId
            }
        })
        return c.json({
            msg: 'post deleted successfully'
        })
    } catch (error) {
        c.status(411);
        console.log(error);
        return c.json({
            msg: "error while deleting blog"
        })     
    }
})