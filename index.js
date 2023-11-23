const express = require("express")
const Port = 3000;
const app = express()

app.get('/',(req, resp)=>{
    resp.send("Use '/api' for definition of express.js || Use '/main' for another definition of Express.js")
    resp.end()
})

app.get('/api', (req, resp)=>{
    resp.send("Express.js is a third party framework of js which is commonly used for creating a server in node.js")
    resp.end()
})

app.get('/main', (req, resp)=>{
    resp.send("Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects.")
    resp.end()
})

app.listen(Port, ()=>{
    console.log("server Started")
})

