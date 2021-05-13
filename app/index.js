
const colors = require('colors');

const exps = require('express');
const morgan = require('morgan');

const server = exps(); 

/* function logger (req,res,next){
    console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
 */
server.use(exps.json());
/* server.use(logger);  */
server.use(morgan('dev')); 



//Routing

/* server.all('/user',(req, res,next)=>{
    console.log('por aqui paso'); 
    next();
})
 */

server.get('/',(req, res) => {
    res.send(`<h1>Get req recibida</h1>`)
})

server.get('/user',(req, res) => {
    res.json(
        {
            userName: 'jose',
            lasTName: 'tacacho'
        }
    );
})

server.post('/user/:id',(req, res) => {
    res.send(`<h1>Post recibida</h1>`)
    console.log(req.body);
    console.log(req.params);
    
})
server.put('/contact',(req, res) => {
    res.send(`<h1>Hola mundo</h1>`)
})
server.put('/user/:id',(req, res) => {
    console.log(req.params)
    res.send(`User ${req.params.id} actualizado`); 
})



server.delete('/delete',(req, res) => {
    res.send(`<h1>Pet delete recibida</h1>`)
})
server.delete('/user/:userId',(req, res) => {
    res.send(`User ${req.params.userId} eliminated`)
})

server.listen(3001, ()=>{
    console.log(`Server on port 3001`.red)
});

/* 

//Forma vieja 

const http = require('http');
const colors = require('colors');

const handleServer = (req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(`<h1>Hola mundo desde node</h1>`);
    res.end();
}

const server = http.createServer(handleServer);


server.listen(3000,()=>{
    console.log('server on port 3000'.green)
}); */

