var express = require('express')

const SERVER_PORT = 8089
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//http://localhost:8089/
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/plan")
    res.status(200).send("Welcome to Express Web Server")
    
})

//http://localhost:8089/hello
app.get("/hello", (req, res) => {
    res.setHeader("Content-Type", "text/plan")
    res.status(200).send("Hello Express JS")
    
})

//http://localhost:8089/student
app.get("/user", (req, res) => {
    const stud = {
        
        snm: "Ruslan",
        slm: "Makhanov",
        method: "GET"
       
    }

    res.send(stud)
})
//http://localhost:8089/student
app.post("/user", (req, res) => {
    const stud = {
        snm: "Ruslan",
        slm: "Makhanov",
        method: "POST",
        header: req.headers
    }

    //res.send(stud)
    res.json(stud)
})


//PATH Parameter
//http://localhost:8089/employee/pritesh/patel
app.get("/user/:fname/:lname", (req, res) => {
    const data = req.params
    let fnm = req.params.fname
    let lnm = req.params.lname
    
    res.send(data)
})



app.listen(SERVER_PORT, ()=> {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})