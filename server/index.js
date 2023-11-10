
import express from 'express'
import cors from 'cors'


// import http from 'http'
// import https from 'https'


const app=express();
app.use(cors())
app.use(express.json())




// const prisma=new PrismaClient()

app.get('/',(req,res)=>{
    res.send("hello world")
})






// const httpserver=http.createServer(app);
// const httpsserver=https.createServer(app);

// httpsserver.listen(800,()=>{
//     console.log('server listening at http://localhost:800')
// })

// httpserver.listen(80,()=>{
//     console.log('server listening at http://localhost:80')
// })

app.listen(8000,()=>{
    console.log('server listening at http://localhost:8000')
})