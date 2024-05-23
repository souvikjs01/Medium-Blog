import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono<{
  Bindings: {
		DATABASE_URL: string
    JWT_SECRET: string
	}
}>()
app.use('/*', cors());
// postgres://avnadmin:AVNS_LxhLFjoopLztbE1N2pF@pg-1b9d3232-souvikjs-1.e.aivencloud.com:23064/defaultdb?sslmode=require
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMWYyNmU3YTQtN2JlZS00Yjg1LTk4NzgtMGUzNDIxYWFmNDRlIiwidGVuYW50X2lkIjoiNjkyODI5OWE3MmYwMTQ3NzQzMGIxZGVhMDE2NmVhNWRhMDFlNTRkNTdhNjU0ZDk0N2UzM2ViZTNiNjk5ODI1ZCIsImludGVybmFsX3NlY3JldCI6ImFlMzZjNzlkLTk5ZDUtNDk1Mi1hZmNiLTRjNmVmMDc5NGQ2MyJ9.Hc2RNl9V2oBKVxDyLr1WkedazFL2uEduqhxovsLRlvA"
// POST /api/v1/user/signup
// POST /api/v1/user/signin
// POST /api/v1/blog
// PUT /api/v1/blog
// GET /api/v1/blog/:id
// GET /api/v1/blog/bulk

import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'

app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);


export default app
