import express, {json} from 'express'
import cors from 'cors';
import pool from './db.js';

//const express= require("express");
const app = express();
//const pool = require("./db");
const PORT = process.env.PORT || 3000;
const corsOptions = {origin:'*'}

app.use(cors(corsOptions));
app.use(express.json());

//ROUTES//

//get all parents

app.get("/parents", async (req, res) =>{
    try {
        const allParents = await pool.query("SELECT * FROM parent");

        res.json(allParents.rows);
    } catch (err) {
        console.log(err.message);
    }
});

//get a parent

app.get("/parents/:id", async (req, res)=>{
    const { id } = req.params;
    try {
        const parent = await pool.query("SELECT * FROM parent WHERE parent_id = $1", [id]);

        res.json(parent.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//create a parent

app.post("/parents", async(req, res) => {
    try{
        const {parent_id} = req.body;
        const { parent_name } = req.body;
        const { parent_phone_number } = req.body;

        const newParent = await pool.query("INSERT INTO parent (parent_id,parent_name,parent_phone_number) VALUES ($1,$2,$3) RETURNING *",[parent_id,parent_name,parent_phone_number]);
        //const newParent_phone_number = await pool.query("INSERT INTO parent (parent_phone_number) VALUES ($1) RETURNING *",[Parent_phone_number]);

        res.json(newParent.rows[0]);
        //res.json(newParent_phone_number.rows[0]);

    } catch (err){
        console.error(err.message);
    }
});

//update a parent 

app.put("/parents/:id", async(req, res) => {
    try {
        const { id } = req.params; // WHERE
        const { parent_name } = req.body; // SET
        const { parent_phone_number } = req.body; // SET

        const updateParent = await pool.query("UPDATE parent SET parent_name = $1, parent_phone_number = $2 WHERE parent_id = $3", [parent_name, parent_phone_number, id ]);

        res.json("parent was updated");
    } catch (err) {
        console.error(err.message);
    }
});


//delete a parent

app.delete("/parents/:id", async(req,res) =>{
    try {
        const { id } = req.params;
        const deleteParent = await pool.query("DELETE FROM parent WHERE parent_id = $1",[id]);

        res.json("parent was deleted");
    } catch (err) {
        console.error(err.message);      
    }
} );



app.listen(PORT, () =>{
    console.log(`server is listening on port:${PORT}`);
});
