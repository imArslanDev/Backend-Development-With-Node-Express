let http  = require("http")

const PORT = 3000
let server = http.createServer((req, res) => {
    if(req.url === "/news") {
        let obj = {
            status: 1,
            data: [
                {
                    newsTitle: "Open AI's New Model",
                    newsDesc: "Open Ai's just drop their most capable model called GPT 5.5"
                },
                {
                    newsTitle: "FIFA World Cup 2026",
                    newsDesc: "Explore About FIFA World Cup 2026"
                }
            ]
        }
        res.end(JSON.stringify(obj))
    } 
    
    if(req.url === "/about") {
        res.end("<h1>Welcome to About Page</h1>")   
    }

    if(req.url === "/contact") {
        res.end("<h1>Welcome to Contact Page</h1>")
    } 
    
    if(req.url === "/") {
        res.end("<h1>Welcome to 1st Backend App</h1>")   
    }
})



server.listen(PORT, () => {
    console.log(`Server is listening on PORT:${PORT}`)
})