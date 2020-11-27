const express =require('express');
const router = express.Router();
const mysqlConnection= require('../db/db');

router.get('/actividades',(req,res)=>{
mysqlConnection.query('SELECT * from tblactividad',(err,rows,fiels)=>{
if(!err){
   res.json(rows); 
}else{
console.log(err);
}});
})// fin
/* Crear una nueva actividad
POST/api/nueva
 */

router.post('/crear',(req,res)=>{
const{nombre}=req.body;

let actividad=[nombre];
let nuevactividad=`INSERT INTO tblactividad(nombre)VALUES(?)`;               
mysqlConnection.query(nuevactividad,actividad,(err,results,fields)=>{
if(err){
return console.error(err.message);
}else{
res.json({message:'Nueva actividad registrada'});

}})// fin query insert  modificacioss
})// fin nueva actividad

// Editar una actividad PUT 
router.put('/editar/:codigo',(req,res)=>{
    const { nombre } = req.body;
    const {codigo } = req.body;
    mysqlConnection.query(`UPDATE tblactividad SET nombre=? WHERE codigo=? `,[nombre, codigo], (err, rows, fields) => {
                if (!err) {
                    res.json({ status: 'actividad actualizada' });
                } else {
                    console.log(err);
                }// fin si

           }//  
    );
})// fin editar

router.delete('/eliminar/:codigo',(req,res)=>{
    const {codigo } = req.params;
    mysqlConnection.query(`DELETE FROM tblactividad WHERE codigo=? `,[codigo], (err, rows, fields) => {
                if (!err) {
                    res.json({ status: 'actividad Borrada' });
                } else {
                    console.log(err);
                }// fin si

           }//  
    );
})// fin editar













module.exports=router;