


const express = require("express")
const app = express()


app.get("/", (req, res) => {
    console.log("Hello World")
    res.status(200).json({
        message: "Hello World"
    })
})

const port = 3500;  

app.listen(port, () => {
    console.log(`Server runing on port ${port}`)
})



