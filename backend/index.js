const express=require('express');
const app=express();
const actividad=require('./router/actividad');
const consumo=require('./router/consumo');
const registro=require('./router/registro');
// Ajustess 
app.set('port');//puerto único  //firewall 3000

// middleware

app.use(express.json());
// ajustess
// defino middleware los servicios en la ruta
app.use('/api',actividad); //define servicio que va consumir servicio backend 
app.use('/api',consumo); // 
app.use('/api',registro); 
//defino para el manejo del registro 


app.listen(app.get('port'),()=>{
    console.log('listening on port' + app.get('port'));
}); 