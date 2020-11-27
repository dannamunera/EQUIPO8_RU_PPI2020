const express =require('express');
const router = express.Router();
const mysqlConnection= require('../db/db');

router.get('/consumos',(req,res)=>{
mysqlConnection.query('SELECT  tblconsumo.consecutivo,tblconsumo.fecharegistro,tblconsumo.tiempo_horas,tblconsumo.cantidad_mt_cubicos mts_cubicos,tblconsumo.consumo_dias, tblconsumo.cedusuario Documento, tblusuario.nombre,tblusuario.apellido, tblactividad.nombre Actividad FROM tblconsumo , tblactividad, tblusuario WHERE tblconsumo.actividad=tblactividad.codigo AND tblusuario.cedula=tblconsumo.cedusuario',(err,rows,fiels)=>{
if(!err){
   res.json(rows); 
}else{
console.log(err);
}});
})// 
// INformación completa de consumo por persona
router.get('/consumo_usuario/:cedula',(req,res)=>{
  const {cedula} = req.params;
  
mysqlConnection.query('SELECT  tblconsumo.consecutivo,tblconsumo.fecharegistro,tblconsumo.tiempo_horas,tblconsumo.cantidad_mt_cubicos mts_cubicos,tblconsumo.consumo_dias, tblconsumo.cedusuario Documento, tblusuario.nombre,tblusuario.apellido, tblactividad.nombre Actividad FROM tblconsumo , tblactividad, tblusuario WHERE tblconsumo.actividad=tblactividad.codigo AND tblusuario.cedula=tblconsumo.cedusuario AND tblusuario.cedula='+cedula,(err,rows,fiels)=>{
if(!err){
   res.json(rows); 
}else{
console.log(err);
}});
})// 


router.post('/crear',(req,res)=>{
const{nombre,cedusuario, tiempo_horas, cantidad_mt_cuadrados, consumo_dias, fecharegistro}=req.body;

let consumo=[nombre];
let nuevoconsumo=`INSERT INTO tblconsumo(nombre, cedusuario, tiempo_horas, cantidad_mt_cuadrados, consumo_dias, fecharegistro)VALUES(?,?,?,?,?,?)`;               
mysqlConnection.query(nuevoconsumo,cedusuario, tiempo_horas, cantidad_mt_cuadrados, consumo_dias, fecharegistro,(err,results,fields)=>{
if(err){
return console.error(err.message);
}else{
res.json({message:'Nuevo consumo registrado'});

}})// fin query insert  modificacioss
})

router.put('/editar/:consecutivo',(req,res)=>{
    const { tiempo_horas, cantidad_mt_cubicos, consumo_dias } = req.body;
    const {consecutivo} =req.params; 
    
   mysqlConnection.query(`UPDATE tblconsumo SET tiempo_horas=?,cantidad_mt_cubicos, consumo_dias=? WHERE consecutivo=? `,[ tiempo_horas, cantidad_mt_cubicos, consumo_dias,consecutivo], (err, rows, fields) => {
                if (!err) {
                    res.json({ status: 'consumo Actualizado' });
                } else {
                    console.log(err);
                }// fin si

           }//  
    );
})// fin editar














module.exports=router;