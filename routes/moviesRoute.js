import express from "express"
import db from "../db/conn.js"
import { ObjectId } from "mongodb";

const movieRoutes = express.Router()

movieRoutes.get("/movies", async (req, res)=>{
    const collection = db.collection("movies")
    const result = await collection.find({}).limit(20).toArray()
    
        res.status(200).send(result)
    })

    movieRoutes.get("/users", async (req, res)=>{
        const collection = db.collection("users")
        const result = await collection.find({}).limit(20).toArray()
        
            res.status(200).send(result)
        })
   
        
    movieRoutes.get("/theaters", async (req, res)=>{
        const collection = db.collection("theaters")
        const result = await collection.find({}).limit(20).toArray()
        
            res.status(200).send(result)
        })
    
        movieRoutes.get("/movies/:id", async (req, res) => {
            const response = new ObjectId(req.params.id);
            const result = await db.collection("movies").findOne({ _id: response });
            res.status(200).send(result);
            // const result = await collections.find({}).limit(20).toArray()
          });


export default movieRoutes