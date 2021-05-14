
const colors = require('colors');

const exps = require('express');
const morgan = require('morgan');
const port = 3001;
const server = exps(); 

/* function logger (req,res,next){
    console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
 */

//settings 
server.set('appName','Alk reto'); 
server.set('port',3001);

//middlewares 
server.use(exps.json());
server.use(morgan('dev'));
server.set('view engine','ejs'); 

/* server.use(logger);  */

//Routing

/* server.all('/user',(req, res,next)=>{
    console.log('por aqui paso'); 
    next();
})
 */

server.get('/',(req,res)=>{
    const data = [{name:'jhon'},{name:'joe'},{name:'cameron'}]
    res.render('index.ejs',{people:data});
});

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

server.use(exps.static('public'))
server.listen(server.get('port'), ()=>{
    console.log(`Server on port ${server.get('port')}`.red);
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
