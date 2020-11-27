const express =require('express');
const router = express.Router();
const mysqlConnection= require('../db/db');

router.get('/consumos',(req,res)=>{
mysqlConnection.query('SELECT * from consumo',(err,rows,fiels)=>{
if(!err){
   res.json(rows); 
}else{
console.log(err);
}});
})// fin













module.exports=router;