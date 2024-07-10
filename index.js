import express from "express"
import data from "./data/data.json" assert {type: "json"}
import movieRoutes from "./routes/moviesRoute.js"

const app = express()
const PORT = 5000
app.use(express.json())

app.use("/movie", movieRoutes)

app.get("/", (req, res)=>{
    res.send("Hello World")
})

app.post("/fruit", (req, res)=>{
    console.log(req.body);
    const body = req.body
    data.push(body)
    console.log(data);
    res.send("data saved successfully")
})

app.listen(PORT, ()=>{
    console.log("server is running successfully", PORT);
})