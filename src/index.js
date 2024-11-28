const express = require('express');
const dotenv = require('dotenv');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT

app.get("/notes", async (req, res) => {
    try{
        const notes = await prisma.notes.findMany();
        res.status(200).send({
            "data" : notes,
            "message" : "get all notes data"
        });
    }catch(erorr){
        res.status(500).send({
            "error" : "internal server error",
            "message" : error.message   
        });
    }
});

app.get("/notes/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const note = await prisma.notes.findUnique({
            where: {
                id: Number(id)
            }
        });

        if(note){
            res.status(200).send({
                "data" : note,
                "message" : "get note data by id"
            });
        }else{
            res.status(404).send({
                "error" : "not found",
                "message" : "id not found"
            });
        }

    }catch(error){
        res.status(500).send({
            "error" : "internal server error",
            "message" : error.message
        })
    }
});

app.post("/notes", async(req, res) => {
    const { title, content } = req.body;
    try{
        const note = await prisma.notes.create({
            data: {
                title,
                content
            }
        });
        res.status(201).send({
            "data" : note,
            "message" : "note created successfully"
        });
    }catch(error){
        res.status(500).send({
            "error" : "internal server error",
            "message" : error.message
        });
    }
    
});

app.delete("/notes/:id", async (req, res) => {
    const id = Number(req.params.id);
    try{
        const note = await prisma.notes.delete({
            where: {
                id
            }
        });
        res.status(200).send({
            "data" : note,
            "message" : "note deleted successfully"
        });
    }catch(error){
        res.status(500).send({
            "error" : "internal server error",
            "message" : error.message
        });
    }
});

app.put("/notes/:id", async (req, res) => {
    const id = Number(req.params.id);
    const { title, content } = req.body;
    try{
        const note = await prisma.notes.update({
            where: {
                id
            },
            data: {
                title,
                content
            }
        });
        res.status(200).send({
            "data" : note,
            "message" : "note updated successfully"
        });
    }catch(error){
        res.status(500).send({
            "error" : "internal server error",
            "message" : error.message
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});