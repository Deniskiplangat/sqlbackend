const express = require('express')
const database = require('./db')
const app = express()




app.get('/createdatabase',(req,res)=>{
    let databaseName = 'kapkures';
    let createQuery = `CREATE DATABASE ${databaseName}`;
    database.query(createQuery,(err)=>{
        if (err) throw err;
        console.log("Database Created Successfully !");

        let useQuery = `use ${databaseName}`
        database.query(useQuery,()=>{
            if (err) throw err;
            console.log('successfully used the database')
            return res.send(`succesfully using the ${databaseName} database`)
        })
    })
    
})



app.listen(3002,()=>{
    console.log('app is workin as expected')
})