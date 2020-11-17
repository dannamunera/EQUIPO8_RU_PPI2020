const express=require('express');
const app=express();
const actividad=require('./router/actividad');
// Ajustess 
app.set('port', 3000);//puerto único  //firewall

// middleware
app.use(express.json());
// ajustess
// defino middleware
app.use('/api',actividad);


app.listen(app.get('port'),()=>{
    console.log('listening on port' + app.get('port'));
}); 